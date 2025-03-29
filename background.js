chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "analyzeText") {
    fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: message.text,
        language: "en",
        entities: ["PHONE_NUMBER", "EMAIL_ADDRESS", "PERSON"],
      }),
    })
      .then((response) => response.json())
      .then((data) => sendResponse({ success: true, data }))
      .catch((error) => {
        console.error("Background fetch error:", error);
        sendResponse({ success: false, error: error.toString() });
      });
    return true; // Indicates that the response will be sent asynchronously.
  }
});
