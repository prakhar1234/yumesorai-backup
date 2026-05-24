# Deploy Your Yumesorai Website - Complete Instructions

Your website is ready to deploy! Follow these simple steps to get it live.

---

## 🚀 Deployment in 4 Steps (Takes ~15 minutes)

### **STEP 1: Create GitHub Repository**

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `yumesorai-website`
   - **Description:** Yumesorai - AI-driven legacy modernization platform
   - **Visibility:** Public
   - Leave other options as default
3. Click **Create repository**

**You'll see a page with next steps** - follow the instructions below instead.

---

### **STEP 2: Upload Your Code to GitHub**

**Choose ONE of these methods:**

#### **Method A: Web Upload (EASIEST - No command line needed)**

1. On the GitHub repo page you just created, look for **"uploading an existing file"** link
2. Click it
3. Drag and drop ALL FILES from your computer:
   - Go to: `/Users/prakhartripathi/yumesorai-website/`
   - Select ALL files and folders
   - Drag them to the GitHub upload area
4. GitHub will show all files ready to upload
5. Add commit message: `Initial Yumesorai website deployment`
6. Click **Commit changes**

✅ Your code is now on GitHub!

#### **Method B: GitHub Desktop (USER-FRIENDLY GUI)**

1. Download: https://desktop.github.com/
2. Install and launch GitHub Desktop
3. Sign in with your GitHub account (prakhar1234)
4. Click **File** → **Clone Repository**
5. Select **URL** tab
6. Paste: `https://github.com/prakhar1234/yumesorai-website.git`
7. Click **Clone**
8. When asked where to clone, choose a new folder
9. GitHub will create the folder and clone it
10. Copy all files from `/Users/prakhartripathi/yumesorai-website/` to this new folder
11. Go back to GitHub Desktop
12. All files will show as "Changes"
13. Click in the **Summary** field and type: `Initial Yumesorai website deployment`
14. Click **Commit to main**
15. Click **Publish branch**

✅ Your code is now on GitHub!

#### **Method C: Command Line (If you have git working)**

```bash
cd /Users/prakhartripathi/yumesorai-website

# Initialize git
git init

# Configure git
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create commit
git commit -m "Initial Yumesorai website deployment"

# Set main branch
git branch -M main

# Add remote (replace prakhar1234 with your username if different)
git remote add origin https://github.com/prakhar1234/yumesorai-website.git

# Push to GitHub
git push -u origin main
```

When prompted for authentication, use your GitHub credentials.

---

### **STEP 3: Deploy to Railway**

1. Go to: https://railway.app
2. Click **Sign Up** (or login if you have account)
3. Click **Create Account with GitHub**
4. Authorize Railway to access your GitHub
5. After signing in, click **New Project**
6. Select **Deploy from GitHub**
7. You'll see your repositories - select **yumesorai-website**
8. Click **Deploy**

Railway will now:
- Build your app (2-3 minutes)
- Deploy to production
- Give you a live URL

---

### **STEP 4: Get Your Live URL**

1. Wait for Railway to finish building (2-3 minutes)
2. Go to: https://railway.app/dashboard
3. Click on **yumesorai-website** project
4. Click **Deployments** tab
5. You'll see a URL like: `https://yumesorai-production-xxxxx.railway.app`
6. **Copy this URL**
7. **Share it with reviewers!**

Test it by visiting:
- `https://your-url.railway.app/` - Homepage
- `https://your-url.railway.app/contact` - Contact form
- `https://your-url.railway.app/demo` - Demo booking

---

## ✅ Optional: Enable Auto-Deployments

So every time you update code, it auto-deploys without manual steps:

### Option 1: Railway Dashboard (Recommended)

1. Go to https://railway.app/dashboard
2. Select your project
3. Click **Settings** → **Deployment**
4. Toggle **"Automatic Deployment"** to ON
5. Done! Now every `git push` auto-deploys

### Option 2: GitHub Secrets (For CI/CD Pipeline)

If you want the GitHub Actions workflow to handle deployments:

1. Get Railway API token:
   - https://railway.app/account/tokens
   - Click **Create Token**
   - Copy it

2. Add to GitHub:
   - Go to: https://github.com/prakhar1234/yumesorai-website/settings/secrets/actions
   - Click **New repository secret**
   - Name: `RAILWAY_TOKEN`
   - Value: (paste your token)
   - Click **Add secret**

3. Now every `git push` will trigger GitHub Actions which auto-deploys

---

## 🎯 What You Get

✅ **11 Production Pages**
- Homepage, contact form, demo booking, assessment, solutions, about, blog, case studies, ROI calculator, how it works, resources

✅ **3 API Endpoints**
- Contact form submission, demo booking, assessment form

✅ **Fully Responsive**
- Works on mobile, tablet, desktop

✅ **SEO Optimized**
- Metadata, Open Graph, structured data

✅ **Automated Deployments**
- GitHub Actions CI/CD pipeline
- Auto-deploy on code changes
- Rollback support

---

## 📋 Quick Checklist

- [ ] Read this file
- [ ] Create GitHub repository at https://github.com/new
- [ ] Upload code to GitHub (Method A, B, or C above)
- [ ] Deploy to Railway at https://railway.app
- [ ] Wait 2-3 minutes for build
- [ ] Copy your live URL from Railway
- [ ] Test your website
- [ ] Share URL with reviewers
- [ ] (Optional) Enable auto-deployments

---

## 🆘 Troubleshooting

### GitHub Upload Not Working?
- Use GitHub Desktop instead (easier): https://desktop.github.com/

### Railway Deployment Stuck?
- Click "View Logs" in Railway dashboard
- Most common issue: Missing environment variables
- Add variables in Railway → Settings → Variables

### Website Not Loading?
- Check Railway logs for errors
- Verify all files were uploaded to GitHub
- Try refreshing your browser

### Forms Not Working?
- They work without API keys (development mode)
- Add API keys later if needed:
  - HUBSPOT_API_KEY (for CRM)
  - RESEND_API_KEY (for emails)

---

## 🔄 Making Updates After Deployment

Once live, to make changes:

```bash
# Make code changes
nano src/app/page.tsx

# Upload changes (use GitHub Desktop or web upload)

# Railway automatically redeploys!
```

Or if using git:
```bash
git add .
git commit -m "Update: your changes"
git push origin main
```

---

## 📚 Full Documentation

If you need more details:
- `QUICK_START.md` - Alternative setup guide
- `DEPLOYMENT.md` - Complete documentation
- `AUTOMATED_DEPLOYMENT.md` - CI/CD details

---

## 🎉 You're Ready!

Your website is:
✅ Complete and tested
✅ Production-ready
✅ Easy to deploy
✅ Auto-updating

**Start with STEP 1 above and you'll have a live website in 15 minutes!**

---

**Questions?** Check the troubleshooting section above or refer to the full documentation files.

Good luck! 🚀
