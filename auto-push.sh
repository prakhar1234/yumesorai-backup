#!/bin/bash

# Yumesorai Website - Automated Git Push Script
# This script will: initialize git, add files, commit, and push to GitHub

set -e

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║       YUMESORAI - AUTOMATED GIT PUSH (CLI COMMANDS)            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

GITHUB_USERNAME="prakhar1234"
GITHUB_TOKEN="${GITHUB_TOKEN:-your-token-here}"  # Set via environment variable
REPO_NAME="yumesorai-website"
PROJECT_DIR="/Users/prakhartripathi/yumesorai-website"

cd "$PROJECT_DIR"

echo "📌 Step 1: Initializing Git Repository"
echo ""

# Remove existing git if present
rm -rf .git 2>/dev/null || true

# Initialize git
git init
echo "✓ Git repository initialized"

# Configure git
git config user.name "Yumesorai Deployment"
git config user.email "deploy@yumesorai.com"
echo "✓ Git configured"

echo ""
echo "📌 Step 2: Adding Files to Git"
echo ""

# Add all files
git add .
echo "✓ All files staged"

# Create commit
git commit -m "Initial Yumesorai website deployment

- 11 production pages (home, contact, demo, assessment, solutions, about, blog, case studies, ROI calculator, how it works, resources)
- 3 working API endpoints (contact, demo, assessment)
- Mobile responsive design
- SEO optimized
- Production-ready build
- Auto-deployment configured"

echo "✓ Initial commit created"

echo ""
echo "📌 Step 3: Setting Up Remote Repository"
echo ""

# Set main branch
git branch -M main
echo "✓ Main branch set"

# Configure remote with authentication embedded in URL
REMOTE_URL="https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

git remote add origin "$REMOTE_URL" 2>/dev/null || git remote set-url origin "$REMOTE_URL"
echo "✓ Remote repository configured"

echo ""
echo "📌 Step 4: Pushing Code to GitHub"
echo ""

# Push to GitHub
git push -u origin main

echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "✅ CODE SUCCESSFULLY PUSHED TO GITHUB!"
echo ""
echo "Repository: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo ""
echo "📌 NEXT STEP: Deploy to Railway"
echo ""
echo "1. Go to: https://railway.app/dashboard"
echo "2. Click: New Project"
echo "3. Select: Deploy from GitHub"
echo "4. Authorize GitHub"
echo "5. Select: ${REPO_NAME}"
echo "6. Click: Deploy"
echo ""
echo "⏱️  Railway will build in 2-3 minutes"
echo ""
echo "🎉 Your website will be live soon!"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
