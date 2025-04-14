const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const baseDir = path.resolve(__dirname, '../'); // Adjust for monorepo root
const tailwindConfigDir = path.join(baseDir, 'tailwind-config');
function getAvailableThemes(dirPath) {
  try {
      // Read the contents of the directory
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });

      // Filter for directories only and return their names
      return entries
          .filter(entry => entry.isDirectory() && entry.name !== 'json-data')
          .map(entry => entry.name);
  } catch (error) {
      console.error(`Error reading directory: ${error.message}`);
      return [];
  }
}

// Load available themes from the package.json in tailwind-config
const availableThemes = getAvailableThemes(`${tailwindConfigDir}/themes`) || [];


function buildTailwindCSS(theme,  mode = 'build') {
  const themeDir = path.join(tailwindConfigDir, 'themes', theme);
  const tailwindConfigPath = path.join(themeDir, 'tailwind.config.cjs');
  const postCssConfigPath = path.join(themeDir, 'postcss.config.cjs');

  const globalsCssPath = path.join(themeDir, 'globals.css'); // Assuming each theme has a globals.css
  const outputPath = path.join(baseDir,'public', `themes/${theme}.css`);
  
  // Ensure globals.css exists in the theme directory
  if (!fs.existsSync(globalsCssPath)) {
    console.error(`globals.css not found for theme "${theme}": ${globalsCssPath}`);
    process.exit(1);
  }

  console.log(`${mode === 'build' ? 'Building' : 'Watching'} Tailwind CSS for theme "${theme}"`);
  console.log(`Using globals.css: ${globalsCssPath}`);
  console.log(`Output path: ${outputPath}`);

  const watchFlag = mode === 'build' ? '' : '--watch';
  const logConfig = exec(
  `npx tailwindcss -i ${tailwindConfigPath}s -w`);
  const watchProcess = exec(
    `npx tailwindcss -c ${tailwindConfigPath} -o ${outputPath} ${watchFlag} -i "${globalsCssPath}" --postcss ${postCssConfigPath}`,
    (err) => {
      if (err) console.error(`Error building ${theme}:`, err.message);
    }
  );
logConfig.stdout.pipe(process.stdout);
  watchProcess.stdout.pipe(process.stdout);
  watchProcess.stderr.pipe(process.stderr);
}

// Build or watch for each app
   availableThemes.forEach((theme) => {
    buildTailwindCSS(theme, process.argv.includes('--watch') ? 'watch' : 'build');
  });
 

console.log('Watching for changes...');
