console.log("🚀 Versteckt is watching...");

// Inject ripple CSS
const style = document.createElement("style");
style.innerHTML = `
  .versteckt-ripple {
    animation: verstecktFade 1s ease-out;
    background: rgba(0, 255, 180, 0.2);
    border-radius: 4px;
  }
  @keyframes verstecktFade {
    0% { background: rgba(0, 255, 180, 0.7); }
    100% { background: transparent; }
  }
`;
document.head.appendChild(style);

/* =====================================================
   Fake Data Generators (Vanilla JS)
   ===================================================== */
const FAKE_NAMES = ["Rick Dalton", "Jane Doe", "John Smith", "Alice Johnson", "Bob Lee"];
function getFakeName() {
  return FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)];
}

function getFakeEmail() {
  const names = ["rick", "jane", "john", "alice", "bob"];
  const domains = ["example.com", "gmail.com", "yahoo.com", "hotmail.com"];
  return `${names[Math.floor(Math.random() * names.length)]}${Math.floor(Math.random() * 1000)}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

function getFakePhone() {
  const area = Math.floor(Math.random() * 900 + 100);
  const mid = Math.floor(Math.random() * 900 + 100);
  const last = Math.floor(Math.random() * 9000 + 1000);
  return `(${area}) ${mid}-${last}`;
}

function getFakeSSN() {
  const a = Math.floor(Math.random() * 900 + 100);
  const b = Math.floor(Math.random() * 90 + 10);
  const c = Math.floor(Math.random() * 9000 + 1000);
  return `${a}-${b}-${c}`;
}

function getFakeCreditCard() {
  let parts = [];
  for (let i = 0; i < 4; i++) {
    parts.push(Math.floor(Math.random() * 9000 + 1000));
  }
  return parts.join(" ");
}

function getFakeAddress() {
  const streets = ["Main St", "Elm St", "Maple Ave", "Oak St", "Pine Rd"];
  const cities = ["Springfield", "Rivertown", "Greenville", "Lakeside", "Hillview"];
  const states = ["CA", "NY", "TX", "FL", "IL"];
  const streetNumber = Math.floor(Math.random() * 9999 + 1);
  const street = streets[Math.floor(Math.random() * streets.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const zip = Math.floor(Math.random() * 90000 + 10000);
  return `${streetNumber} ${street}, ${city}, ${state} ${zip}`;
}

// Map entity types to fake generators
const FAKE_GENERATORS = {
  PERSON: getFakeName,
  EMAIL_ADDRESS: getFakeEmail,
  PHONE_NUMBER: getFakePhone,
  US_SOCIAL_SECURITY_NUMBER: getFakeSSN,
  CREDIT_CARD: getFakeCreditCard,
  ADDRESS: getFakeAddress
};

/* =====================================================
   Global Replacement Mapping
   ===================================================== */
// Stores original token => fake value, so that once replaced, it won’t change
const replacedMapping = {};

/* =====================================================
   Presidio Anonymizer Wrapper
   ===================================================== */
// This function sends a message to your background script (which handles "analyzeText")
// and then uses the returned entity data to replace tokens with fake data.
async function presidioAnonymize(text) {
  try {
    const response = await new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: "analyzeText", text }, (res) => {
        resolve(res);
      });
    });
    if (!response.success || !response.data || !response.data.length) return text;

    let anonymized = text;
    // Process entities from end to start to avoid index shifting
    response.data.sort((a, b) => b.start - a.start).forEach(entity => {
      // Get the token from the current text (it might have been partially replaced)
      const token = anonymized.slice(entity.start, entity.end);
      // If this token is already replaced, skip it.
      if (Object.values(replacedMapping).includes(token)) return;
      
      const generator = FAKE_GENERATORS[entity.entity_type];
      const fakeValue = generator ? generator() : "[REDACTED]";
      // Save mapping: original token -> fake value
      replacedMapping[token] = fakeValue;
      anonymized = anonymized.slice(0, entity.start) + fakeValue + anonymized.slice(entity.end);
    });
    return anonymized;
  } catch (err) {
    console.error("Presidio error:", err);
    return text;
  }
}

/* =====================================================
   Sanitize Field on Space Key (Keyup)
   ===================================================== */
// When the user types a space, check if the last word is new and then sanitize.
async function sanitizeField(field, isContentEditable = false) {
  const text = isContentEditable ? field.innerText : field.value;
  if (!text || !text.endsWith(" ")) return; // Only process if text ends with a space

  // Extract the last word (trim extra spaces)
  const words = text.trim().split(/\s+/);
  if (!words.length) return;
  const lastWord = words[words.length - 1];

  // If the last word is already replaced, skip sanitization.
  if (Object.values(replacedMapping).includes(lastWord)) return;

  const sanitized = await presidioAnonymize(text);
  if (text !== sanitized) {
    console.log(`🔐 Field sanitized on space: ${text} → ${sanitized}`);
    if (isContentEditable) {
      field.innerText = sanitized;
      highlight(field);
      placeCaretAtEnd(field);
    } else {
      field.value = sanitized;
      field.classList.add("versteckt-ripple");
      setTimeout(() => field.classList.remove("versteckt-ripple"), 1000);
    }
  }
}

/* =====================================================
   Event Listeners
   ===================================================== */
// Listen for keyup on space
document.addEventListener("keyup", async (e) => {
  if (e.key === " ") {
    const active = document.activeElement;
    if (
      active &&
      ((active.tagName === "TEXTAREA") ||
        (active.tagName === "INPUT" && active.type === "text") ||
        active.isContentEditable)
    ) {
      await sanitizeField(active, active.isContentEditable);
    }
  }
});

// Also, on submission (Enter key or button click) sanitize all fields.
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sanitizeAll();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    sanitizeAll();
  }
});

// Sanitize all fields
async function sanitizeAll() {
  const inputs = document.querySelectorAll("input[type='text'], textarea");
  for (const input of inputs) {
    const before = input.value;
    const after = await presidioAnonymize(before);
    if (before !== after) {
      console.log(`🚫 Input Submit Sanitized: ${before} → ${after}`);
      input.value = after;
      input.classList.add("versteckt-ripple");
      setTimeout(() => input.classList.remove("versteckt-ripple"), 1000);
    }
  }
  const editables = document.querySelectorAll("[contenteditable='true']");
  for (const editable of editables) {
    const before = editable.innerText;
    const after = await presidioAnonymize(before);
    if (before !== after) {
      console.log(`🚫 ContentEditable Submit Sanitized: ${before} → ${after}`);
      editable.innerText = after;
      highlight(editable);
      placeCaretAtEnd(editable);
    }
  }
}

/* =====================================================
   Helper Functions
   ===================================================== */
function highlight(el) {
  el.classList.add("versteckt-ripple");
  setTimeout(() => el.classList.remove("versteckt-ripple"), 1000);
}

function placeCaretAtEnd(el) {
  el.focus();
  if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}