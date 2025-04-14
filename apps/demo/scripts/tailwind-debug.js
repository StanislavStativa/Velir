const fs = require('fs');
const path = require('path');
const process = require('process');
path.resolve
// Function to load Tailwind config
function loadTailwindConfig(configPath) {
    console.log('configPath',path.resolve(__dirname, "..",configPath))
  if (!fs.existsSync(configPath)) {
    console.error(`Tailwind config file not found at: ${configPath}`);
    process.exit(1);
  }

 
  return require(path.resolve(__dirname, "..",configPath));
}

// Function to validate Tailwind config
function validateTailwindConfig(config) {
  const errors = [];

  // Validate content paths (should not be empty)
  if (!config.content || !Array.isArray(config.content) || config.content.length === 0) {
    errors.push('Missing or invalid content paths. Ensure you have specified content paths for purging unused styles.');
  }

  // Validate the theme structure
  if (config.theme && typeof config.theme !== 'object') {
    errors.push('The theme property should be an object. Make sure to define theme values correctly.');
  }

  // Check for the extend property in theme
  if (config.theme && config.theme.extend && typeof config.theme.extend !== 'object') {
    errors.push('The "extend" key inside theme should be an object.');
  }

  // Validate purge configuration (for Tailwind v2.x)
  if (config.purge && typeof config.purge !== 'object') {
    errors.push('The "purge" configuration is invalid. For Tailwind v2.x, use the "content" property instead.');
  }

  // Validate plugins and variants (if present)
  if (config.plugins && !Array.isArray(config.plugins)) {
    errors.push('Plugins should be an array. Ensure your plugins are correctly defined.');
  }

  if (config.variants && typeof config.variants !== 'object') {
    errors.push('Variants should be an object. Ensure variants are properly configured.');
  }

  return errors;
}

// Function to check if a class exists in the config
function classExistsInConfig(className, config) {
  const { theme, variants, plugins } = config;

  // Check in theme extension (colors, borders, spacing, etc.)
  const themeCategories = ['colors', 'spacing', 'borderColor', 'borderRadius', 'fontSize', 'fontWeight', 'boxShadow', 'opacity', 'zIndex'];

  for (const category of themeCategories) {
    if (theme[category] && theme[category][className]) {
      return true;
    }
  }

  // Check if custom plugins or variants define the class
  if (variants && variants[category] && variants[category].includes(className)) {
    return true;
  }

  if (plugins) {
    plugins.forEach(plugin => {
      if (plugin({ theme, variants }) && plugin({ theme, variants })[className]) {
        return true;
      }
    });
  }

  return false;
}

// Function to check if the custom class exists
function checkForCustomClasses(config) {
  const customClasses = [];

  const usedClasses = new Set();
  const classPattern = /(?:[^\w-])(\w+-\w+)/g;

  // Read the CSS files and look for Tailwind classes
  const cssFiles = ['globals.css']; // You can add more files here

  cssFiles.forEach((cssFile) => {
    const cssFilePath = path.resolve(__dirname, cssFile);

    if (fs.existsSync(cssFilePath)) {
      const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
      let match;
      while ((match = classPattern.exec(cssContent)) !== null) {
        usedClasses.add(match[1]);
      }
    }
  });

  // Check if the classes exist in the Tailwind config
  usedClasses.forEach((className) => {
    if (!classExistsInConfig(className, config)) {
      customClasses.push(className);
    }
  });

  return customClasses;
}

// Main debug function
function debugTailwindConfig(configPath) {
  const config = loadTailwindConfig(configPath);
  console.log('Debugging Tailwind Configuration...');

  // Run Tailwind config validation
  const configErrors = validateTailwindConfig(config);
  if (configErrors.length > 0) {
    console.log('\nConfiguration Errors:');
    configErrors.forEach((error) => console.log(`  - ${error}`));
  } else {
    console.log('Tailwind config validation passed.');
  }

  // Check for missing custom classes
  const missingClasses = checkForCustomClasses(config);
  if (missingClasses.length > 0) {
    console.log('\nWarning: The following custom classes are missing from the Tailwind config:');
    missingClasses.forEach((className) => console.log(`  - ${className}`));
  } else {
    console.log('All classes are defined in the Tailwind config!');
  }

  console.log('\nTailwind config debug completed!');
}

// Get the Tailwind config path from the command line argument or default to 'tailwind.config.js'
const configPath = process.argv[2] || path.resolve(__dirname, 'tailwind.config.js');

// Run the debug function
debugTailwindConfig(configPath);
