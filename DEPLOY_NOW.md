# 🚀 Deploy to Railway in 3 Steps

Your Yumesorai website is ready to deploy. Follow these simple steps:

---

## Step 1: Create GitHub Repository (2 minutes)

**Go to:** https://github.com/new

Fill in:
- **Repository name:** `yumesorai-website`
- **Description:** Yumesorai - AI-driven legacy modernization platform
- **Visibility:** Public
- **Initialize with:** None

Click **Create repository**

---

## Step 2: Upload Your Code

After creating the repository, GitHub will show you options. Choose one:

### Option A: Upload Via Web (Easiest, No Git Needed!)

1. Click **uploading an existing file** link on the GitHub page
2. Select all files from `/Users/prakhartripathi/yumesorai-website/`
3. Drag & drop or click to select all files
4. Add commit message: "Initial Yumesorai website"
5. Click **Commit changes**

### Option B: Use GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in to GitHub
3. Click **File** → **Clone Repository** → Your repo
4. It will ask where to clone - choose a new location
5. Copy files from `/Users/prakhartripathi/yumesorai-website/` to the cloned folder
6. In GitHub Desktop:
   - All files will show as changes
   - Add summary: "Initial Yumesorai website"
   - Click **Commit to main**
   - Click **Push origin**

### Option C: Command Line (If git works)

```bash
cd /Users/prakhartripathi/yumesorai-website
git init
git add .
git commit -m "Initial Yumesorai website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yumesorai-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

---

## Step 3: Deploy to Railway (2 minutes)

1. Go to https://railway.app
2. Click **New Project**
3. Select **Deploy from GitHub**
4. Authorize GitHub when prompted
5. Select **yumesorai-website** repository
6. Click **Deploy**

**Wait 2-3 minutes** while Railway builds and deploys.

---

## Get Your Live URL

After deployment:

1. Go to https://railway.app/dashboard
2. Click your **yumesorai-website** project
3. Click **Deployments** tab
4. Copy the URL (looks like: `https://yumesorai-xxxxx.railway.app`)

**This is your live website! Share it with reviewers.**

---

## Enable Auto-Deployments (Optional but Recommended)

So every code change auto-deploys without manual steps:

### Method 1: Railway Dashboard (Easiest)

1. Railway dashboard → Your project
2. **Settings** → **Deployment**
3. Toggle **"Automatic Deployment on Git Push"** to **ON**
4. Done! ✅

### Method 2: GitHub Secrets (For CI/CD Pipeline)

1. Get Railway token:
   - https://railway.app/account/tokens
   - Click **Create Token**
   - Copy it

2. Add to GitHub:
   - Your repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `RAILWAY_TOKEN`
   - Value: (paste your token)
   - Click **Add secret**

Now every `git push` auto-deploys!

---

## Test Your Deployment

Once live, test these URLs:

- `https://your-url.railway.app/` - Homepage
- `https://your-url.railway.app/contact` - Contact form
- `https://your-url.railway.app/demo` - Demo booking
- `https://your-url.railway.app/about` - About page
- `https://your-url.railway.app/solutions` - Solutions

All pages should load and forms should work!

---

## What's Included

✅ **11 Production Pages**
- Landing page
- Contact form
- Demo booking
- Assessment
- Solutions
- About
- Blog
- Case studies
- ROI calculator
- How it works
- Resources

✅ **3 API Endpoints**
- Contact form submission
- Demo booking
- Assessment form

✅ **Automated CI/CD**
- GitHub Actions pipeline
- Auto-deploy on git push
- Status notifications

---

## Making Updates

After deployment, to make changes:

```bash
# Make changes to your code
nano src/app/page.tsx

# Upload to GitHub (use web, desktop, or git)
# → GitHub Desktop or web upload

# Railway auto-detects the change and redeploys
```

Your site updates automatically!

---

## Troubleshooting

### Railway Deployment Stuck?
- Check logs: Railway dashboard → **Deployments** → **View Logs**
- Common issue: Missing environment variables (add them in **Variables** tab)

### Can't upload files to GitHub?
- Use GitHub Desktop: https://desktop.github.com/
- Much easier than command line

### Forms not working?
- They work in dev mode without API keys
- Forms accept submissions and return success responses
- Add API keys later when you have them

---

## Next: Add API Keys (Optional)

Once your site is live, optionally add these for email/CRM features:

In Railway Dashboard:

1. Your project → **Variables**
2. Add:
   - `HUBSPOT_API_KEY` - For CRM (get from HubSpot)
   - `RESEND_API_KEY` - For emails (get from Resend)
3. Click **Deploy** to apply

---

## You're Done! 🎉

Your website is:
- ✅ Live on Railway
- ✅ Auto-deploying on code changes
- ✅ Shareable with reviewers
- ✅ Production-ready

**Share your live URL with reviewers!**

---

## Questions?

Refer to:
- `QUICK_START.md` - Setup guide
- `DEPLOYMENT.md` - Full documentation
- `AUTOMATED_DEPLOYMENT.md` - Advanced setup
- Railroad docs: https://docs.railway.app
