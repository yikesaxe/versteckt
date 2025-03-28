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

## 🔍 System Design

```plaintext
+-----------------------------------------------+
|              User Input (typed text)          |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|               macOS Keyboard Event Tap        |
|        (captures input in real-time)          |
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
|        External AI Model (e.g. ChatGPT)       |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|           AI Response (masked names)          |
+-------------------------+---------------------+
                          |
                          v
+-----------------------------------------------+
|          Reverse Mapping to Original Data     |
|     (securely restores original data locally) |
+-----------------------------------------------+