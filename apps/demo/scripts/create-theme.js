#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// const packageJsonPath = path.resolve(__dirname, '../tailwind-config/config.json');
const sourceDir = path.resolve(__dirname, '../tailwind-config/themes/default');
const targetDir = path.resolve(__dirname, '../tailwind-config/themes/' + process.argv[2]);

if (!sourceDir || !targetDir) {
  console.error('Usage: create-theme <theme-name>');
  process.exit(1);
}

try {
  fs.cpSync(sourceDir, targetDir, { recursive: true });
  // updatePackageJson(process.argv[2]);

  console.log(`${targetDir} theme files created.`);
} catch (err) {
  console.error('Error copying directory:', err);

  process.exit(1);
}