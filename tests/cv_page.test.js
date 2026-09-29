const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const RAIZ = path.join(__dirname, '..');
const FUENTES = [
  'CV_Jeiser_Gutierrez_SDET_2026_EN.html',
  'CV_Jeiser_Gutierrez_SDET_2026_ES.html',
];

test('las dos fuentes HTML del CV existen y no estan vacias', () => {
  for (const f of FUENTES) {
    const p = path.join(RAIZ, f);
    assert.ok(fs.existsSync(p), 'falta ' + f);
    assert.ok(fs.statSync(p).size > 1000, f + ' parece vacio');
  }
});

test('cada fuente conserva el contrato de una pagina A4', () => {
  for (const f of FUENTES) {
    const html = fs.readFileSync(path.join(RAIZ, f), 'utf8');
    assert.match(html, /@page/i, f + ' no declara la regla @page de impresion');
    assert.match(html, /size:\s*A4/i, f + ' no declara tamano A4');
    assert.match(html, /margin:\s*[\d.]+mm/i, f + ' no declara margenes en milimetros');
  }
});

test('ninguna fuente conserva afirmaciones de CI no verificables', () => {
  for (const f of FUENTES) {
    const html = fs.readFileSync(path.join(RAIZ, f), 'utf8');
    assert.doesNotMatch(html, /GitHub Actions CI\/CD/i, f + ' afirma pipelines de GitHub Actions inexistentes');
  }
});

test('el compilador de PDF con Playwright esta declarado', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(RAIZ, 'package.json'), 'utf8'));
  assert.ok(pkg.scripts['build:pdf'], 'falta el script build:pdf');
  assert.ok(fs.existsSync(path.join(RAIZ, 'build_pdf.js')), 'falta build_pdf.js');
});
