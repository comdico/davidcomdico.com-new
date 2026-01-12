const path = require('path');
const fs = require('fs');
const fsp = fs.promises;
const chokidar = require('chokidar');

const rootDir = process.cwd();
const publicCssDir = path.join(rootDir, 'public', 'css');
const distCssDir = path.join(rootDir, 'dist', 'css');

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function toDistPath(filePath) {
  const rel = path.relative(publicCssDir, filePath);
  return path.join(distCssDir, rel);
}

async function copyFile(filePath) {
  const dest = toDistPath(filePath);
  await ensureDir(path.dirname(dest));
  await fsp.copyFile(filePath, dest);
  console.log(`[watch-public-css] synced ${path.relative(rootDir, filePath)}`);
}

async function removeFile(filePath) {
  const dest = toDistPath(filePath);
  if (fs.existsSync(dest)) {
    await fsp.unlink(dest);
    console.log(`[watch-public-css] removed ${path.relative(rootDir, dest)}`);
  }
}

async function walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile()) {
      await copyFile(fullPath);
    }
  }
}

async function initialSync() {
  if (!fs.existsSync(publicCssDir)) {
    console.log('[watch-public-css] public/css not found yet, waiting for changes...');
    return;
  }
  await walk(publicCssDir);
}

async function run() {
  await initialSync();

  const watcher = chokidar.watch(publicCssDir, {
    ignoreInitial: true,
    awaitWriteFinish: true
  });

  watcher.on('add', copyFile);
  watcher.on('change', copyFile);
  watcher.on('unlink', removeFile);
}

run().catch((err) => {
  console.error('[watch-public-css] failed', err);
  process.exit(1);
});
