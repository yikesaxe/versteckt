Versteckt

Your Personal Privacy Shield for AI Interactions

⸻

📖 Overview

Versteckt (German for “hidden”) is an innovative privacy-preserving solution designed to protect sensitive user information from being unintentionally shared with external AI services like ChatGPT, Claude, Gemini, Siri, and others. By seamlessly intercepting user inputs across browsers and native apps, Versteckt masks sensitive data in real-time, ensuring your private information never reaches external AI models or databases.

⸻

🚀 Purpose

With the rise of AI tools integrated into daily workflows, there’s an increased risk of unintentionally sharing sensitive personal or professional data with third-party models. Versteckt addresses this risk by intelligently detecting and masking sensitive information, providing peace of mind to privacy-conscious users, professionals, and enterprises alike.

⸻

🔍 Why Versteckt?
	•	Protect Personal Information: Keep names, addresses, financial data, and other sensitive details private.
	•	Seamless Integration: Works system-wide on macOS, covering all applications and browsers without significant workflow interruption.
	•	Transparency: Users receive clear indications of what data has been masked, maintaining trust and control.

⸻

🎯 Market Need

The global data privacy market is projected to reach approximately $85 billion by 2030. Privacy regulations like GDPR, HIPAA, and CCPA are increasingly stringent, creating strong demand for tools that protect sensitive data, especially as more users and businesses integrate AI into their workflows.

Target Audiences:
	•	Privacy-conscious Professionals: Legal, finance, healthcare, tech.
	•	Small and Medium Businesses: Without resources to implement complex internal data-protection systems.
	•	Individual Users: Who frequently use AI assistants but are concerned about privacy.

⸻

💡 System Design

Versteckt operates through three primary components:

1. Input Interception
	•	Uses macOS’s Core Graphics Event Taps API.
	•	Globally captures and analyzes keystrokes and text inputs in real-time across all applications.

2. Sensitive Data Detection & Masking
	•	Leverages powerful AI-driven Named Entity Recognition (NER) using spaCy and Microsoft Presidio.
	•	Detects names, places, numbers, and more, replacing them with carefully selected pseudonyms or placeholders.
	•	Maintains a reversible local mapping to restore original text upon receiving AI responses.

3. User Interface
	•	Minimalistic menubar app built using rumps.
	•	Provides notifications and visual feedback on masking activity.
	•	Offers transparency through user-accessible logs of data masking actions.

⸻

🛠 Technical Stack
	•	Language: Python
	•	Input Capture: PyObjC, pynput, Core Graphics Event Taps
	•	PII Detection: spaCy, Microsoft Presidio
	•	UI/UX: rumps (menubar app)

⸻

📈 Market Research
	•	Privacy-conscious consumers and regulated industries (finance, healthcare, legal) present immediate market entry points.
	•	Rapid growth driven by regulatory compliance and data-privacy awareness.
	•	Limited direct competitors; most solutions focus broadly on VPNs or Data Loss Prevention rather than targeted privacy during AI interactions.

⸻

✅ Versteckt Solution

Versteckt fills the market gap by providing:
	•	Real-time system-wide data masking.
	•	Simple yet powerful integration requiring minimal user interaction.
	•	High reliability with minimal latency, ensuring smooth user experience.

⸻

🌟 Future Roadmap
	•	Expansion to Windows and Linux platforms.
	•	Integration plugins for popular productivity tools (Slack, Notion, Teams).
	•	Enhanced AI-powered contextual masking accuracy.
	•	Enterprise-grade dashboard for compliance reporting and oversight.

⸻

🚦 Getting Started

Prerequisites:
	•	macOS
	•	Python 3.8 or higher

Installation:

pip install pynput spacy rumps
python -m spacy download en_core_web_sm

Usage:
	•	Grant accessibility permissions on macOS.
	•	Run python privacy_filter_mvp.py

⸻

🤝 Contributions

Contributions, suggestions, and feedback are welcome! Open an issue or a pull request to get involved.

⸻

📄 License

Versteckt is licensed under the MIT License. See LICENSE for details.

⸻

🌐 Connect
	•	Website: [Your future website URL]
	•	GitHub: [Your future GitHub URL]
	•	Email: [Your contact email]

⸻

Protect your data privacy seamlessly. Choose Versteckt.