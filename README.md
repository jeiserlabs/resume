# Jeiser Gutiérrez — SDET & Agentic Systems Resume

> **1-Page Strict ATS-Friendly Layout** · High-Density Engineering Content · Deterministic Playwright PDF Compilation.

[![English](https://img.shields.io/badge/English-C1_Advanced_(EF_SET_68)-047857?style=flat-square)](https://www.efset.org/)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

This repository holds the HTML source of my one-page curriculum vitae as a **Software Development Engineer in Test (SDET)** and **Agentic Systems Developer**, together with the Playwright script that compiles it to PDF deterministically.

---

## 📄 Documents

| Language | Download (PDF) | Source (HTML) |
| :--- | :--- | :--- |
| **English** | [📥 CV — English (A4 PDF)](https://drive.google.com/file/d/1VHty290AM5iA-xtVU-m5o3HN4Z2DI79j/view) | [`CV_Jeiser_Gutierrez_SDET_2026_EN.html`](CV_Jeiser_Gutierrez_SDET_2026_EN.html) |
| **Español** | [📥 CV — Español (A4 PDF)](https://drive.google.com/file/d/1cWLsTjen2DaFMDIFI93hA2zx9GOWhjp_/view) | [`CV_Jeiser_Gutierrez_SDET_2026_ES.html`](CV_Jeiser_Gutierrez_SDET_2026_ES.html) |

> The compiled PDFs live in Google Drive because this repository is kept **text-only** (no binaries in version control). Run `npm run build:pdf` to regenerate them locally.

---

## 🛠️ Architecture & Principles

1. **Strict 1-Page Constraint**: engineered to fit on a single A4 page (`210mm x 297mm`) with no overflow or clipped content.
2. **ATS-First Structure**: semantic HTML5 without multi-column parsing traps that confuse applicant tracking systems.
3. **Deterministic Headless Rendering**: compiled with **Playwright** (`printBackground: true`, exact millimetre margins) for identical output on every machine.
4. **Impact-First Content**: every bullet quantifies an outcome (automated regression suites, measurable cycle-time reductions) instead of listing duties.
5. **Text-Only Repository**: generated artifacts (PDF) stay out of version control; only the reproducible sources are stored.

---

## ✅ Verifying this repository

```bash
npm install
npm test            # verifies both HTML sources exist and keep the A4 page contract
npm run build:pdf   # compiles both PDFs with Playwright
```

---

## 🔬 Featured Projects

* **[ProGanado](https://github.com/jeiserlabs/proganado)**: livestock ERP and biological traceability engine. Strict 3NF relational model (12 tables, 7 indices) with fail-closed triggers and an automated Node.js test suite.
* **[WheelSaver](https://github.com/jeiserlabs/wheelsaver)**: local SQLite FTS5 index of top GitHub repositories plus an MCP server for autonomous coding agents.

---

## 📬 Contact & Links

* **Location:** Medellín, Colombia
* **Email:** [jeiser270997@gmail.com](mailto:jeiser270997@gmail.com)
* **LinkedIn:** [linkedin.com/in/jeiser-gutierrez](https://linkedin.com/in/jeiser-gutierrez-79ab38120/)
* **GitHub:** [@jeiserlabs](https://github.com/jeiserlabs)
* **Phone / WhatsApp:** +57 304 461 5613
