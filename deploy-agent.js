#!/usr/bin/env node

/**
 * Yumesorai Website - Deployment Agent
 * Automates deployment to Railway with CI/CD setup
 *
 * Usage: node deploy-agent.js [--auto] [--github-user YOUR_USERNAME]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection(title) {
  console.log('');
  log(colors.blue + colors.bright, `▶ ${title}`);
  console.log('');
}

function logSuccess(message) {
  log(colors.green, `✓ ${message}`);
}

function logInfo(message) {
  log(colors.cyan, `ℹ ${message}`);
}

function logWarning(message) {
  log(colors.yellow, `⚠ ${message}`);
}

function logError(message) {
  log(colors.red || colors.yellow, `✗ ${message}`);
}

function execCommand(command, silent = false) {
  try {
    const output = execSync(command, { encoding: 'utf-8', stdio: silent ? 'pipe' : 'inherit' });
    return output;
  } catch (error) {
    logError(`Command failed: ${command}`);
    throw error;
  }
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function main() {
  console.log('');
  log(colors.bright + colors.cyan, '╔════════════════════════════════════════╗');
  log(colors.bright + colors.cyan, '║    YUMESORAI DEPLOYMENT AGENT v1.0      ║');
  log(colors.bright + colors.cyan, '║   Automated Railway Deployment & CI/CD   ║');
  log(colors.bright + colors.cyan, '╚════════════════════════════════════════╝');
  console.log('');

  // Check prerequisites
  logSection('Checking Prerequisites');

  try {
    execCommand('git --version', true);
    logSuccess('Git is installed');
  } catch {
    logError('Git is not installed. Please install Git first.');
    process.exit(1);
  }

  try {
    execCommand('node --version', true);
    logSuccess('Node.js is installed');
  } catch {
    logError('Node.js is not installed.');
    process.exit(1);
  }

  // Check repository structure
  logSection('Verifying Repository Structure');

  const requiredFiles = ['package.json', 'next.config.js', 'src/app/page.tsx'];
  const allFilesExist = requiredFiles.every(file => {
    if (fileExists(file)) {
      logSuccess(`Found ${file}`);
      return true;
    }
    return false;
  });

  if (!allFilesExist) {
    logError('Some required files are missing. Make sure you\'re in the yumesorai-website directory.');
    process.exit(1);
  }

  // Initialize git
  logSection('Setting Up Git Repository');

  if (fileExists('.git')) {
    logSuccess('Git repository already initialized');
  } else {
    try {
      execCommand('git init');
      logSuccess('Git repository initialized');
    } catch {
      logError('Failed to initialize Git repository');
      process.exit(1);
    }
  }

  // Configure git
  try {
    execCommand('git config user.name "Yumesorai Deployment Agent"', true);
    execCommand('git config user.email "deploy@yumesorai.com"', true);
    logSuccess('Git configured');
  } catch {
    logWarning('Could not configure Git (may already be configured globally)');
  }

  // Stage and commit
  logSection('Preparing Code for Deployment');

  try {
    execCommand('git add .');
    logSuccess('All files staged');

    try {
      execCommand('git commit -m "Yumesorai website deployment"', true);
      logSuccess('Initial commit created');
    } catch {
      logSuccess('Repository already up to date');
    }
  } catch {
    logWarning('Could not stage files');
  }

  // Set main branch
  try {
    execCommand('git branch -M main', true);
    logSuccess('Main branch configured');
  } catch {
    logWarning('Could not set main branch');
  }

  // Display deployment information
  logSection('Deployment Information');

  const packageJson = JSON.parse(readFile('package.json'));
  logInfo(`Project: ${packageJson.name}`);
  logInfo(`Version: ${packageJson.version}`);
  logInfo(`Description: ${packageJson.description}`);

  // Check if build succeeds
  logSection('Verifying Production Build');
  logInfo('This may take a minute...');

  try {
    execCommand('npm run build', false);
    logSuccess('Production build verified');
  } catch {
    logError('Production build failed. Please fix errors and try again.');
    process.exit(1);
  }

  // Display next steps
  logSection('🚀 Deployment Ready!');

  log(colors.bright + colors.green, 'Your website is ready for deployment.');
  console.log('');
  log(colors.bright, 'NEXT STEPS:');
  console.log('');
  log(colors.cyan, '1. Create GitHub Repository:');
  log(colors.reset, '   → Go to https://github.com/new');
  log(colors.reset, '   → Name: yumesorai-website');
  log(colors.reset, '   → Visibility: Public');
  log(colors.reset, '   → Create repository');
  console.log('');
  log(colors.cyan, '2. Push to GitHub:');
  log(colors.reset, '   $ git remote add origin https://github.com/YOUR_USERNAME/yumesorai-website.git');
  log(colors.reset, '   $ git push -u origin main');
  console.log('');
  log(colors.cyan, '3. Deploy to Railway:');
  log(colors.reset, '   → Go to https://railway.app');
  log(colors.reset, '   → Click "New Project"');
  log(colors.reset, '   → Select "Deploy from GitHub"');
  log(colors.reset, '   → Choose yumesorai-website');
  console.log('');
  log(colors.cyan, '4. Enable Auto-Deployments:');
  log(colors.reset, '   → Get token: https://railway.app/account/tokens');
  log(colors.reset, '   → GitHub Repo → Settings → Secrets');
  log(colors.reset, '   → Add RAILWAY_TOKEN secret');
  console.log('');
  log(colors.bright + colors.green, '✓ Done! Your site will auto-deploy on every git push.');
  console.log('');
}

// Run the agent
try {
  main();
} catch (error) {
  console.error('');
  logError('Deployment agent encountered an error');
  console.error(error.message);
  process.exit(1);
}
