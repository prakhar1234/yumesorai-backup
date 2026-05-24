# Yumesorai Website - Deployment Guide

## Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `yumesorai-website`
3. Description: "Yumesorai - AI-driven legacy modernization platform"
4. Choose **Public** (for easier sharing)
5. Click **Create repository**

### Step 2: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial Yumesorai website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yumesorai-website.git
git push -u origin main
```

### Step 3: Create Railway Project

1. Go to https://railway.app
2. Click **New Project**
3. Select **Deploy from GitHub**
4. Authorize GitHub and select your `yumesorai-website` repository
5. Railway auto-detects Next.js and starts deployment

✅ **Done!** Your site will be live in 2-3 minutes.

---

## Automated Deployments (CI/CD Agent)

Once you've deployed to Railway, automatic deployments are enabled via GitHub Actions.

### How It Works

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Triggers on every push to `main` or `master` branch
- Installs dependencies
- Builds your app
- Deploys to Railway automatically
- Sends deployment status notifications

### To Enable Automatic Deployments:

#### Option A: Railway Web Dashboard (Easiest)

1. Log in to https://railway.app
2. Select your project
3. Go to **Settings** → **Deployment**
4. Enable "Automatic Deployment on Git Push"
5. Done! ✅

#### Option B: GitHub Secrets Setup (For CI/CD Pipeline)

If you want full control via GitHub Actions:

1. Get your Railway API token:
   - https://railway.app/account/tokens
   - Create new token

2. Add to GitHub Secrets:
   - Go to your repo: **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `RAILWAY_TOKEN`
   - Value: (paste your Railway token)
   - Click **Add secret**

3. The GitHub Actions workflow will now automatically deploy on every push

### Deployment Flow

```
You push code to GitHub main branch
        ↓
GitHub Actions workflow triggers
        ↓
Install dependencies & build
        ↓
Deploy to Railway
        ↓
Your site updates automatically
        ↓
New URL is live (status reported in GitHub Actions)
```

---

## Your Deployed Site

Once deployed, Railway gives you a URL like:

```
https://yumesorai-production-xxxxx.railway.app
```

Share this with reviewers!

---

## Making Updates

After initial setup, to deploy new changes:

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

That's it! GitHub Actions will automatically build and deploy to Railway.

---

## Environment Variables

If you add secrets later (HubSpot API key, Resend API key, etc.):

1. Go to your Railway project dashboard
2. Click **Variables**
3. Add your environment variables
4. Click **Deploy** to redeploy with new variables

---

## Troubleshooting

### Deployment Failed?
- Check GitHub Actions logs: Your repo → **Actions** → Latest workflow
- Check Railway logs: Railway dashboard → Your project → **Deployments** → **View Logs**

### Slow Deployments?
- First deployment takes 3-5 minutes (normal)
- Subsequent deployments: 1-2 minutes
- Railway caches dependencies for faster rebuilds

### Need to Rollback?
- Railway dashboard → **Deployments**
- Click previous successful deployment
- Click **Redeploy**

---

## Next Steps

1. ✅ Deploy to Railway (above)
2. ✅ Enable automatic deployments
3. Test forms and share URL with reviewers
4. Add environment variables when you have API keys
5. Celebrate! 🎉
