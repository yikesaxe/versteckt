<p align="center">
  <img width="120" src="https://em-content.zobj.net/thumbs/120/apple/354/locked-with-key_1f510.png" alt="Versteckt Logo">
</p>

<h1 align="center">Versteckt</h1>

<p align="center">
  <em>Real-Time Privacy Protection for Your AI Interactions</em>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#purpose-and-vision">Vision</a> •
  <a href="#key-features">Features</a> •
  <a href="#market-research">Market Research</a> •
  <a href="#system-design">System Design</a> •
  <a href="#how-it-works">How it Works</a> •
  <a href="#setup">Setup</a> •
  <a href="#future-roadmap">Roadmap</a>
</p>

---

## 🎯 About

**Versteckt** (German: "hidden") is a privacy-centric tool designed to protect sensitive information from being unintentionally shared with third-party AI tools (such as ChatGPT, Claude, Gemini, Siri, and others). It intercepts and anonymizes private data in real-time, ensuring that your conversations remain safe, secure, and confidential.

---

## 🌟 Purpose and Vision

As powerful AI tools become embedded in everyday workflows, users inadvertently share highly sensitive data—personal names, financial information, addresses, medical details—often without realizing it. **Versteckt** solves this critical issue by automatically anonymizing sensitive details before they ever reach external servers.

Our vision is to create a seamless, trustworthy privacy shield that empowers users to leverage AI tools without compromising their data security.

---

## 🚀 Key Features

- **Real-time Anonymization:** Instantly detects and masks sensitive information before submission.
- **Intelligent Masking:** Uses NLP and Named Entity Recognition (NER) to accurately identify sensitive data.
- **System-wide Coverage:** Works across browsers (Chrome, Safari, Firefox) and native macOS apps (Slack, Notion, etc.).
- **Data Control & Transparency:** Clearly indicates what information is being anonymized and why.
- **Ease of Use:** Minimalist menubar interface—lightweight, intuitive, and always accessible.

---

## 📈 Market Research

### 📌 Problem Space
- Increasing public and regulatory concerns over privacy and data leaks (GDPR, CCPA).
- Users frequently disclose sensitive data to third-party AI models without realizing the risk.
- Integration of AI tools in daily workflows amplifies the risk of unintended data exposure.

### 📌 Market Potential
- The Data Privacy Market is currently valued at **~$23 billion** and is projected to reach **~$85 billion by 2030** ([Grand View Research](https://www.grandviewresearch.com)).
- High demand sectors include healthcare, finance, legal, education, and enterprises requiring compliance solutions.

### 📌 Target Audience
- Privacy-conscious individuals and professionals (e.g., doctors, lawyers, financial analysts).
- Small-to-medium enterprises (SMEs) with limited internal data anonymization infrastructure.
- Organizations needing easy-to-deploy, effective privacy solutions.

---

## 🔍 How it Works

```plaintext
+-----------------------------------------------+
|              User Input (typed text)          |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|         Content Script (Chrome Extension)     |
|   (Captures input in real-time on key press)  |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|                Sensitive Data Detection       |
|      (NER, regex-based rules for PII)         |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|              Anonymization & Masking          |
|   (replaces sensitive data with pseudonyms)   |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|           AI Response (masked names)          |
+-------------------------+---------------------+
```

## 💻 Setup

### ⚙️ Tech Stack

- Chrome Extension (Manifest v3)
- JavaScript (Vanilla)
- Microsoft Presidio (running locally in Docker)
- NER & Regex-based PII Detection

### 🔥 How it Works

1.	Real-time Monitoring — Versteckt listens to all input events on text areas, inputs, and contentEditable fields.
2.	Sensitive Data Detection — When you type a space or submit text, it sends your input to a local Presidio API (localhost:3000/analyze).
3.	Anonymization — Detected PII is replaced with realistic fake data (e.g., fake names, emails, phone numbers) and stored in a local mapping.
4.	Consistent Replacement — Once replaced, the same fake data is used throughout the entire chat to maintain coherence.

### ⚡ Quick Start (Local Installation)

1. Clone the Repository

```bash
git clone https://github.com/yikesaxe/versteckt.git
cd versteckt-extension
```

2. Run Microsoft Presidio (Docker)

Make sure Docker Desktop is installed and running.
```bash
docker pull mcr.microsoft.com/presidio-analyzer
docker run -d -p 3000:3000 \
  -e "FLASK_APP=presidio-analyzer" \
  -e "FLASK_ENV=development" \
  -e "CORS_ALLOWED_ORIGINS=*" \
  mcr.microsoft.com/presidio-analyzer
```

3. Load the Chrome Extension
	1.	Open chrome://extensions
	2.	Enable Developer Mode
	3.	Click Load Unpacked
	4.	Select the versteckt/ folder

### 🧩 Usage

Once installed:
	•	Go to ChatGPT, Claude, or any chat tool.
	•	Start typing sensitive data (e.g. name, email, SSN).
	•	As soon as you type a space, Versteckt will anonymize that entity with fake data.
	•	You can verify the replacements in the Console Logs (F12).

## 🛣️ Future Roadmap

	•	Add detection and anonymization for additional entities (Dates, National IDs, IP addresses).
	•	Build a Reverse Mapping toggle to automatically revert fake data in AI responses (optional).
	•	Firefox and Safari extension versions.
	•	Create a macOS native app with system-wide input anonymization (key tap level).
	•	Enterprise features — bulk anonymization & compliance logs.
	•	UI Dashboard to visualize sanitized data & mappings.


## 🤝 Contributing

Contributions are welcome!
Feel free to submit PRs, issues, or new ideas.

## 📄 License

Distributed under the MIT License. See LICENSE for details.

<p align="left">
Built with ❤️ by Axel L.
Privacy is not a feature, it’s a right.
</p>