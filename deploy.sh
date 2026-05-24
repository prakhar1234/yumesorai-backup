#!/bin/bash

# Yumesorai Website - One-Click Deployment Script
# This script automates the entire Railway deployment process

set -e

echo "🚀 Yumesorai Website - Deployment Agent"
echo "======================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if GitHub username is provided
if [ -z "$1" ]; then
    echo "📌 Usage: ./deploy.sh YOUR_GITHUB_USERNAME"
    echo ""
    echo "Example: ./deploy.sh johnsmith"
    echo ""
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="yumesorai-website"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo -e "${BLUE}Step 1: Initialize Git Repository${NC}"
if [ -d .git ]; then
    echo "✓ Git repository already initialized"
else
    git init
    echo "✓ Git repository initialized"
fi

echo ""
echo -e "${BLUE}Step 2: Configure Git${NC}"
git config user.name "Deployment Agent" 2>/dev/null || git config --global user.name "Deployment Agent"
git config user.email "deploy@yumesorai.com" 2>/dev/null || git config --global user.email "deploy@yumesorai.com"
echo "✓ Git configured"

echo ""
echo -e "${BLUE}Step 3: Add All Files${NC}"
git add .
echo "✓ All files staged"

echo ""
echo -e "${BLUE}Step 4: Create Initial Commit${NC}"
if git commit -m "Initial Yumesorai website deployment" 2>/dev/null; then
    echo "✓ Initial commit created"
else
    echo "✓ Repository already up to date"
fi

echo ""
echo -e "${BLUE}Step 5: Set Main Branch${NC}"
if git show-ref --quiet refs/heads/main; then
    echo "✓ Main branch already set"
else
    git branch -M main
    echo "✓ Main branch set"
fi

echo ""
echo -e "${BLUE}Step 6: Add Remote Repository${NC}"
if git remote get-url origin &>/dev/null; then
    git remote set-url origin "$REPO_URL"
    echo "✓ Remote URL updated to: $REPO_URL"
else
    git remote add origin "$REPO_URL"
    echo "✓ Remote repository added: $REPO_URL"
fi

echo ""
echo -e "${GREEN}✅ Git Setup Complete!${NC}"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo "1. Create a GitHub repository:"
echo "   Go to https://github.com/new"
echo "   Name: $REPO_NAME"
echo "   Click 'Create repository'"
echo ""
echo "2. Push code to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Railway:"
echo "   Go to https://railway.app"
echo "   Click 'New Project'"
echo "   Select 'Deploy from GitHub'"
echo "   Choose your $REPO_NAME repository"
echo ""
echo "4. Enable CI/CD (automatic deployments):"
echo "   Add RAILWAY_TOKEN to GitHub Secrets:"
echo "   Settings → Secrets and variables → Actions"
echo "   https://railway.app/account/tokens"
echo ""
echo -e "${GREEN}That's it! Your site will auto-deploy on every git push.${NC}"
echo ""
