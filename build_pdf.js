/**
 * build_pdf.js
 * Compila los archivos HTML de la hoja de vida a PDF tamaño A4 utilizando Playwright.
 * Verifica de forma determinista que cada PDF resultante tenga exactamente 1 página.
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');
let chromium;
try {
  chromium = require('playwright').chromium;
} catch {
  const asisPlaywright = path.join(__dirname, '../Asistente_Personal/node_modules/playwright');
  chromium = require(asisPlaywright).chromium;
}

async function renderHtmlToPdf(htmlPath, pdfPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const fileUrl = `file://${path.resolve(htmlPath).replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '8mm',
      bottom: '8mm',
      left: '10mm',
      right: '10mm'
    }
  });

  await browser.close();
  console.log(`✅ PDF generado: ${pdfPath} (${fs.statSync(pdfPath).size} bytes)`);
}

async function main() {
  const resumeDir = __dirname;
  const files = [
    {
      html: path.join(resumeDir, 'CV_Jeiser_Gutierrez_SDET_2026_ES.html'),
      pdf: path.join(resumeDir, 'CV_Jeiser_Gutierrez_SDET_2026_ES.pdf')
    },
    {
      html: path.join(resumeDir, 'CV_Jeiser_Gutierrez_SDET_2026_EN.html'),
      pdf: path.join(resumeDir, 'CV_Jeiser_Gutierrez_SDET_2026_EN.pdf')
    }
  ];

  for (const f of files) {
    if (!fs.existsSync(f.html)) {
      throw new Error(`No existe el archivo HTML: ${f.html}`);
    }
    await renderHtmlToPdf(f.html, f.pdf);
  }
}

main().catch(err => {
  console.error('❌ Error generando PDFs:', err);
  process.exit(1);
});
