#!/bin/bash

# Direct Railway Deployment (No GitHub Needed!)

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║      DEPLOYING TO RAILWAY DIRECTLY (No GitHub!)                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

RAILWAY_TOKEN="caca1bc5-e771-40a3-8bef-1334d8afeaef"
PROJECT_DIR="/Users/prakhartripathi/yumesorai-website"

cd "$PROJECT_DIR"

echo "📌 Step 1: Setting up Railway CLI..."
echo ""

export RAILWAY_TOKEN="$RAILWAY_TOKEN"

# Ensure Railway CLI is installed
npm list -g @railway/cli > /dev/null 2>&1 || npm install -g @railway/cli

echo "✓ Railway CLI ready"

echo ""
echo "📌 Step 2: Initializing Railway Project..."
echo ""

# Initialize Railway project
railway init --name yumesorai-website --yes 2>/dev/null || echo "Project already initialized"

echo "✓ Railway project configured"

echo ""
echo "📌 Step 3: Deploying to Railway..."
echo ""

# Deploy to Railway
railway up --detach

echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "✅ DEPLOYMENT STARTED!"
echo ""
echo "Your website is deploying to Railway!"
echo ""
echo "📊 Check Deployment Status:"
echo "   Go to: https://railway.app/dashboard"
echo "   Look for: yumesorai-website project"
echo "   Click: Deployments tab"
echo ""
echo "⏱️  Build time: 2-3 minutes"
echo ""
echo "When complete:"
echo "   1. Copy your live URL from Railway"
echo "   2. Test your website"
echo "   3. Share with reviewers!"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
