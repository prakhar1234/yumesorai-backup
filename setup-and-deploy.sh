#!/bin/bash

# Yumesorai Website - Automated Setup & Deployment
# This script handles local git setup and creates everything needed for Railway deployment

set -e

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║     YUMESORAI WEBSITE - AUTOMATED DEPLOYMENT SETUP             ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Get GitHub username
echo -e "${BLUE}Step 1: GitHub Setup${NC}"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "GitHub username is required"
    exit 1
fi

REPO_NAME="yumesorai-website"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo ""
echo -e "${BLUE}Step 2: Initialize Git Repository${NC}"
echo ""

# Configure git
git config --global user.name "Yumesorai Deployer" 2>/dev/null || echo "Git configured"
git config --global user.email "deploy@yumesorai.com" 2>/dev/null || echo "Git email configured"

# Initialize if needed
if [ ! -d .git ]; then
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${GREEN}✓ Git repository already exists${NC}"
fi

# Add all files
git add .
echo -e "${GREEN}✓ All files staged${NC}"

# Create commit
if git commit -m "Yumesorai website - Ready for deployment" 2>/dev/null; then
    echo -e "${GREEN}✓ Initial commit created${NC}"
else
    echo -e "${GREEN}✓ Repository already up to date${NC}"
fi

# Set main branch
git branch -M main 2>/dev/null || true
echo -e "${GREEN}✓ Main branch set${NC}"

# Add remote
if git remote get-url origin &>/dev/null; then
    git remote set-url origin "$REPO_URL"
    echo -e "${GREEN}✓ Remote URL updated${NC}"
else
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✓ Remote repository added${NC}"
fi

echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo -e "${CYAN}✅ LOCAL SETUP COMPLETE!${NC}"
echo ""
echo -e "${YELLOW}Now follow these steps to deploy:${NC}"
echo ""

echo -e "${BLUE}STEP 1: Create GitHub Repository${NC}"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: ${REPO_NAME}"
echo "   3. Visibility: Public"
echo "   4. Click: Create repository"
echo ""

echo -e "${BLUE}STEP 2: Push Code to GitHub${NC}"
echo "   Run this command:"
echo ""
echo -e "${CYAN}   git push -u origin main${NC}"
echo ""
echo "   (You'll be prompted to authenticate. Use your GitHub credentials)"
echo ""

echo -e "${BLUE}STEP 3: Deploy to Railway${NC}"
echo "   1. Go to: https://railway.app"
echo "   2. Sign in or create account"
echo "   3. Click: New Project"
echo "   4. Select: Deploy from GitHub"
echo "   5. Authorize GitHub when prompted"
echo "   6. Select: ${REPO_NAME}"
echo "   7. Click: Deploy"
echo ""

echo -e "${BLUE}STEP 4: Get Your Live URL${NC}"
echo "   1. Wait 2-3 minutes for build"
echo "   2. Go to: https://railway.app/dashboard"
echo "   3. Select your project"
echo "   4. Click: Deployments"
echo "   5. Copy your URL (like: https://yumesorai-xxxxx.railway.app)"
echo "   6. Share with reviewers!"
echo ""

echo "════════════════════════════════════════════════════════════════"
echo ""
echo -e "${GREEN}Ready to push? Run:${NC}"
echo ""
echo -e "${CYAN}   git push -u origin main${NC}"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
