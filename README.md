# LifeGuard AI

**Know the risk. Protect your life.**

LifeGuard AI is a privacy-first digital safety platform designed to help individuals, families and communities recognize scams, phishing, fraud and suspicious communications, understand potential risks and take informed protective action.

Our mission is to make digital security accessible, understandable and actionable for everyone, regardless of age, technical knowledge or financial circumstances.

**Detect. Understand. Protect. Recover.**

[Open LifeGuard AI](https://droidjedininja.github.io/lifeguard-ai/)

## Current capabilities

- Rule-based contextual scam and phishing detection
- Suspicious URL analysis using local heuristics
- Risk assessments and guided recovery assistance
- Local-first, mobile-friendly progressive web application (PWA)
- Optional local summary history and accessibility settings

## Development status

The public application is a v0.2.0 preview. The develop-v0.3.0 branch introduces 18 scam classification categories, selected Spanish detection patterns, 150 synthetic labeled regression cases, and improvements to risk labels and mobile navigation. LG-001 and LG-002 passed initial device tests; the expanded suite and navigation changes still require validation.

## Roadmap

- Screenshot analysis and local OCR
- Camera and QR code scanning
- Website threat reputation intelligence
- Android sharing and bilingual English/Spanish interface
- Scam-specific recovery plans
- Identity exposure monitoring and family safety
- AI-assisted threat analysis and financial fraud prevention

## Local development

Requires Git, Node.js and Python 3.

```bash
git clone https://github.com/droidjedininja/lifeguard-ai.git
cd lifeguard-ai
git switch develop-v0.3.0
python3 -m http.server 8781 --bind 127.0.0.1
```

Open http://127.0.0.1:8781 in your browser.

## Regression tests

```bash
node test.js
node test-v020.js
node test-lg001.js
node test-v030.js
```

## Privacy and limitations

The current scanner uses local rule-based analysis, not a trained AI model or live reputation service. Optional local summary history is unencrypted. Browser, offline and security validation remain necessary. A low-risk result does not guarantee safety, and a high-risk result does not prove fraud. Independently verify suspicious requests using trusted official channels. Never submit real passwords or verification codes for testing.

## Vision

Digital protection should be accessible to everyone. LifeGuard AI aims to become a trusted digital safety companion that helps people identify potential threats, understand them, recover from incidents and prevent future harm.

**LifeGuard AI — Technology built to protect humanity.**
