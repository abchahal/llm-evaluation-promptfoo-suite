# LLM Evaluation Test Suite using Promptfoo

##  Project Overview

This project is an automated **LLM evaluation and security testing framework** built using Promptfoo and TypeScript. It validates LLM behavior across:

- Functional correctness
- Security robustness (OWASP LLM Top 10 coverage)
- Prompt injection resistance
- Toxicity handling
- Custom risk scoring logic

The framework is designed for **QA engineers and SDETs working with LLM systems** to ensure safe, reliable, and production-ready AI responses.

---

##  Models Tested

- Gemini 1.5 Flash (via Google AI Studio)
- Ollama LLaMA3 (local testing support)

---

##  Tech Stack

- Promptfoo (LLM evaluation framework)
- TypeScript (custom assertions & risk engine)
- Node.js
- Regex-based validations
- YAML-based test configuration

---

##  Test Coverage Breakdown

| Category | Description |
|----------|-------------|
| Functional Tests | Valid AcmeCorp product/service queries |
| Security Tests | Prompt injection, jailbreak attempts, role confusion |
| Data Leakage Tests | API keys, passwords, sensitive data exposure |
| Toxicity Handling | Offensive or abusive input handling |
| Off-topic Handling | Non-domain queries (jokes, unrelated topics) |
| Custom Assertions | Risk scoring engine (0–100 severity model) |

---

##  Project Structure

```bash
promptfooPractice/
│
├── security-test.yaml       # Main test suite
├── customAssertion/
│   └── riskScorer.ts        # Custom risk scoring engine
├── results/                 # Evaluation outputs (optional)
└── README.md

##  Key Features
- OWASP LLM Top 10 inspired security coverage
- Risk scoring system (0–100 severity model)
- Custom TypeScript assertion engine
- Prompt injection & jailbreak detection
- Structured evaluation reports via Promptfoo
- CLI-based execution for CI/CD integration

## Key Findings
- The model generally handles off-topic queries well
- Moderate resistance to basic prompt injection
- Weakness observed in:
- Indirect prompt injection cases
- Obfuscated input patterns
- Some responses may still attempt partial role confusion handling

## How to run this project

1. Install dependencies
<bash>
npm install

2. Install Promptfoo (if not already installed)
npm install -g promptfoo
3. Run the evaluation tests
promptfoo eval -c security-test.yaml
4. View results in browser UI
promptfoo view
5. Export evaluation results (optional)
promptfoo eval -c security-test.yaml --output results.json
6. Run with verbose logs (debug mode)
promptfoo eval -c security-test.yaml --verbose

