import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');
const indexPath = resolve(distDir, 'index.html');

let html = readFileSync(indexPath, 'utf8');

html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/g, (_match, href) => {
  const cssPath = resolve(distDir, href.replace(/^\.\//, ''));
  const css = readFileSync(cssPath, 'utf8');
  return `<style>\n${css}\n</style>`;
});

html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, (_match, src) => {
  const jsPath = resolve(distDir, src.replace(/^\.\//, ''));
  const js = readFileSync(jsPath, 'utf8');
  return `<script type="module">\n${js}\n</script>`;
});

writeFileSync(indexPath, html);
