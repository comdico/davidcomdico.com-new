const fs = require('fs');
const path = require('path');
const { defineConfig } = require('vite');

const rootDir = process.cwd();
const skipDirs = new Set(['node_modules', 'dist', 'public', '.git']);

function collectHtmlFiles(dir, acc) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) {
        continue;
      }
      collectHtmlFiles(path.join(dir, entry.name), acc);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      acc.push(path.join(dir, entry.name));
    }
  }
}

const htmlFiles = [];
collectHtmlFiles(rootDir, htmlFiles);

const input = htmlFiles.reduce((map, filePath) => {
  const rel = path.relative(rootDir, filePath);
  const name = rel.replace(/\.html$/, '').split(path.sep).join('/');
  map[name] = filePath;
  return map;
}, {});

function watchPublicCss() {
  return {
    name: 'watch-public-css',
    handleHotUpdate({ file, server }) {
      const publicCssDir = `${path.sep}public${path.sep}css${path.sep}`;
      if (file.includes(publicCssDir)) {
        server.ws.send({ type: 'full-reload', path: '*' });
      }
    }
  };
}

module.exports = defineConfig({
  base: './',
  plugins: [watchPublicCss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  }
});
