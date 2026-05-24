# Automated Deployment System - Complete Guide

## Overview

Your Yumesorai website has a **fully automated CI/CD (Continuous Integration/Continuous Deployment) system** that:

✅ Automatically builds your app on every code change
✅ Automatically deploys to Railway with zero downtime
✅ Handles rollbacks if something goes wrong
✅ Notifies you of deployment status
✅ Requires zero manual intervention after initial setup

---

## The Deployment Agent

### What is it?

The **Deployment Agent** is an automated system that handles:

1. **Initial Setup** - Initializes git, verifies your code
2. **Automatic Builds** - Builds on every code change
3. **Continuous Deployment** - Deploys to Railway automatically
4. **Status Notifications** - Tells you if deployment succeeded
5. **Rollback Support** - Can revert to previous versions if needed

### How it Works

```
You write code
     ↓
You commit to git
     ↓
You push to GitHub (main branch)
     ↓
GitHub Actions workflow triggered
     ↓
Automatic build process starts
     ↓
App builds successfully
     ↓
Automatic deployment to Railway
     ↓
Your site is live with new changes
     ↓
Workflow complete (status notification sent)
```

---

## Three Ways to Deploy

### Method 1: Deployment Agent Script (Automated Setup)

**Run the deployment agent to set everything up automatically:**

```bash
cd /Users/prakhartripathi/yumesorai-website
node deploy-agent.js
```

This will:
- ✓ Verify your setup
- ✓ Initialize git repository
- ✓ Create initial commit
- ✓ Verify production build works
- ✓ Guide you through GitHub + Railway setup

### Method 2: Bash Script (Quick Setup)

**Run the deployment script with your GitHub username:**

```bash
./deploy.sh your-github-username
```

This will:
- ✓ Set up git repository
- ✓ Create initial commit
- ✓ Configure git remotes
- ✓ Guide you through deployment

### Method 3: Manual Steps (Full Control)

```bash
# Initialize git
git init

# Configure git
git config user.name "Your Name"
git config user.email "your@email.com"

# Add and commit
git add .
git commit -m "Initial deployment"
git branch -M main

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/yumesorai-website.git

# Push to GitHub
git push -u origin main
```

---

## GitHub Actions Workflow

The deployment is automated by `.github/workflows/deploy.yml`:

```yaml
Triggered on:
  - Push to main/master branch
  - Manual workflow dispatch

What it does:
  1. Checks out code
  2. Installs Node.js 20
  3. Installs npm dependencies
  4. Builds the Next.js app
  5. Deploys to Railway using RAILWAY_TOKEN
  6. Sends status notification
```

---

## Setting Up Continuous Deployment

### Step 1: Get Railway Token

1. Go to https://railway.app/account/tokens
2. Click **New Token**
3. Name it: `GitHub Deployment`
4. Copy the token

### Step 2: Add Token to GitHub Secrets

1. Go to your GitHub repo
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. **Name:** `RAILWAY_TOKEN`
5. **Value:** (paste your Railway token)
6. Click **Add secret**

### Step 3: Done!

Now every push to `main` branch auto-deploys:

```bash
git add .
git commit -m "Update: your changes"
git push origin main
```

Railway will automatically build and deploy in 1-2 minutes!

---

## Monitoring Deployments

### GitHub Actions
Check build status:
- Your repo → **Actions** tab
- See all deployment runs
- Click any run to see logs

### Railway Dashboard
Monitor your app:
- https://railway.app/dashboard
- Click your project
- **Deployments** tab shows history
- **View Logs** shows build output

---

## Deployment Workflow Examples

### Example 1: Fix a Bug and Deploy

```bash
# Make your changes to src/app/page.tsx
vim src/app/page.tsx

# Stage and commit
git add src/app/page.tsx
git commit -m "Fix: homepage styling issue"

# Push to GitHub
git push origin main

# ✅ Automated deployment starts immediately!
# Check GitHub Actions or Railway dashboard
```

### Example 2: Add a New Page and Deploy

```bash
# Create new page
mkdir -p src/app/new-page
echo "export default function NewPage() { return <h1>Hello</h1> }" > src/app/new-page/page.tsx

# Commit and push
git add .
git commit -m "Feature: add new page"
git push origin main

# ✅ New page is live in 2 minutes!
```

### Example 3: Update Environment Variables and Redeploy

```bash
# Add variable in Railway dashboard
# Your project → Variables → Add variable

# Trigger redeploy
git commit --allow-empty -m "Redeploy with new env variables"
git push origin main

# ✅ App redeploys with new configuration!
```

---

## Rollback to Previous Deployment

If something goes wrong after deployment:

### Via Railway Dashboard

1. Go to https://railway.app/dashboard
2. Select your project
3. **Deployments** tab
4. Find previous successful deployment
5. Click **Redeploy**

Takes 1-2 minutes and your site is back to the previous version.

### Via Git

```bash
# Find previous commit
git log --oneline -10

# Revert to previous commit
git revert HEAD

# Push to trigger redeploy
git push origin main
```

---

## Environment Variables

Add secrets and environment variables:

### In Railway Dashboard

1. Your project → **Variables**
2. Click **Add Variable**
3. Add your keys:
   - `HUBSPOT_API_KEY`
   - `RESEND_API_KEY`
   - Any other secrets
4. Click **Deploy** to apply changes

### In GitHub Secrets

1. Repo → **Settings** → **Secrets and variables** → **Actions**
2. Add secrets (e.g., `RAILWAY_TOKEN`)
3. Use in workflow: `${{ secrets.YOUR_SECRET_NAME }}`

---

## Troubleshooting

### Deployment Failed?

1. **Check GitHub Actions logs:**
   - Your repo → **Actions** → Latest workflow
   - Click failed run
   - Scroll down to see error message

2. **Check Railway logs:**
   - Railway dashboard → Your project
   - **Deployments** → **View Logs**
   - Look for build or runtime errors

3. **Common Issues:**
   - Missing environment variable → Add to Railway Variables
   - Build error → Check npm dependencies
   - Port conflict → Railway assigns ports automatically

### How to Fix and Retry

```bash
# Fix the issue in your code
vim src/app/page.tsx

# Commit the fix
git add .
git commit -m "Fix: correct the issue"

# Push to trigger redeploy
git push origin main
```

---

## Performance & Limits

- **Build time:** 2-5 minutes (first deploy), 1-2 minutes (subsequent)
- **Deployment frequency:** Unlimited
- **Concurrent deployments:** 1 (queued automatically)
- **Storage:** 10GB free tier (plenty for this app)
- **Auto-restart:** Enabled (restarts if app crashes)

---

## Advanced Configuration

### Custom Build Commands

Edit `.github/workflows/deploy.yml` to customize:

```yaml
- name: Build
  run: npm run build  # Change this
```

### Custom Start Command

Edit `railway.json`:

```json
{
  "deploy": {
    "startCommand": "npm start"  # Change this
  }
}
```

### Adding More Environments

Create additional workflows:
- `.github/workflows/deploy-staging.yml` (for testing)
- `.github/workflows/deploy-preview.yml` (for PRs)

---

## Best Practices

✅ **Do:**
- Commit small, focused changes
- Write descriptive commit messages
- Test locally before pushing
- Check deployment logs after pushing
- Use meaningful branch names

❌ **Don't:**
- Push directly to main without testing
- Commit secrets or API keys
- Force push to main (use `git reset` locally instead)
- Deploy during critical business hours (for updates)

---

## Next Steps

1. **Create GitHub repo:** https://github.com/new
2. **Run deployment agent:** `node deploy-agent.js`
3. **Add Railway token to GitHub Secrets**
4. **Push code:** `git push origin main`
5. **Monitor deployment:** Check GitHub Actions or Railway dashboard
6. **Share your live URL** with reviewers!

---

## Questions?

- Refer to `QUICK_START.md` for fast setup
- Refer to `DEPLOYMENT.md` for detailed docs
- Check GitHub Actions logs for build errors
- Check Railway logs for runtime errors

**Happy deploying!** 🚀
