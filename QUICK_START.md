# 🚀 Quick Start - Deploy in 5 Minutes

## Before You Start
Make sure you have:
- GitHub account (free at https://github.com)
- Railway account (free at https://railway.app)

---

## Step-by-Step Deployment

### ✅ Step 1: Create GitHub Repository (2 min)

1. Open https://github.com/new
2. **Repository name:** `yumesorai-website`
3. **Description:** Yumesorai - AI-driven legacy modernization platform
4. **Visibility:** Public
5. Click **Create repository**

### ✅ Step 2: Push Your Code (1 min)

```bash
cd /Users/prakhartripathi/yumesorai-website

# Initialize git (if needed)
git init

# Configure git
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add and commit all files
git add .
git commit -m "Initial Yumesorai website commit"

# Set main branch
git branch -M main

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/yumesorai-website.git
git push -u origin main
```

### ✅ Step 3: Deploy to Railway (2 min)

1. Open https://railway.app
2. Click **New Project**
3. Select **Deploy from GitHub**
4. Authorize GitHub
5. Select **yumesorai-website** repository
6. Click **Deploy**

**🎉 Done!** Railway will:
- Detect it's a Next.js app
- Build your app
- Deploy automatically
- Give you a live URL in 2-3 minutes

---

## Get Your Live URL

After deployment:

1. Go to https://railway.app/dashboard
2. Click your project
3. Click **Deployments** tab
4. Copy the URL (looks like `https://yumesorai-xxxx.railway.app`)
5. **Share this URL with reviewers!**

---

## Enable Auto-Deployments (CI/CD)

### Option A: Railway Dashboard (Easiest)
1. Railway dashboard → Your project
2. **Settings** → **Deployment**
3. Toggle **"Automatic Deployment on Git Push"**
4. Done! ✅

### Option B: GitHub Actions
1. Get Railway token: https://railway.app/account/tokens
2. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `RAILWAY_TOKEN`
5. Value: (paste your token)
6. Click **Add secret**

Now every `git push` will auto-deploy!

---

## Making Updates

```bash
# Make changes to your code
git add .
git commit -m "Update: your changes"
git push
```

✅ GitHub Actions will automatically build and deploy to Railway!

---

## Test Your Deployment

Once deployed, test these URLs:

- `https://your-url.railway.app/` - Homepage
- `https://your-url.railway.app/contact` - Contact form
- `https://your-url.railway.app/demo` - Demo booking
- `https://your-url.railway.app/solutions` - Solutions page
- `https://your-url.railway.app/about` - About page

All forms should work and accept submissions.

---

## Troubleshooting

**Deployment stuck?**
- Check Railway logs: Dashboard → Deployments → View Logs

**Git push fails?**
- Run: `git status` to see what needs to be committed
- Run: `git add . && git commit -m "Update" && git push`

**Forms not working?**
- They work in development mode without API keys
- Add HubSpot/Resend API keys later if needed

---

## What's Included

✅ **11 Production-Ready Pages**
- Landing page
- Contact form
- Demo booking
- Assessment form
- Solutions hub
- About page
- Blog
- Case studies
- ROI calculator
- How it works
- Resources

✅ **3 API Endpoints**
- Contact form submission
- Demo booking
- Assessment form

✅ **Automated Deployment**
- GitHub Actions CI/CD pipeline
- Auto-deploy on git push
- Deployment status notifications
- Easy rollback to previous versions

---

## Questions?

Refer to `DEPLOYMENT.md` for detailed documentation.

Happy deploying! 🎉
