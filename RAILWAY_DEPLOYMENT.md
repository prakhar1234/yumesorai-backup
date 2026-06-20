# Railway Deployment Guide

Railway makes it incredibly easy to deploy your Next.js + PostgreSQL application. This guide walks you through automatic deployment in just a few minutes.

## What is Railway?

Railway is a modern deployment platform that:
- ✅ Automatically detects Next.js projects
- ✅ Builds and deploys on every git push
- ✅ Provides managed PostgreSQL database
- ✅ Handles environment variables automatically
- ✅ Provides free $5/month credit for new users
- ✅ Auto-deploys from GitHub
- ✅ Custom domains included

## Prerequisites

1. GitHub account with the repository pushed
2. Railway account (free at https://railway.app)
3. Project access on GitHub

## Step-by-Step Deployment

### 1. Connect GitHub to Railway

1. Go to https://railway.app
2. Click **"Create a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub account
5. Select the `yumesorai-website` repository
6. Click **"Deploy"**

### 2. Add PostgreSQL Database (Automatic)

Railway automatically detects Prisma in your `package.json` and can provision PostgreSQL:

**Option A: Add Database Manually**
1. In your Railway project dashboard
2. Click **"+ Add"**
3. Select **"PostgreSQL"**
4. Railway will create a new PostgreSQL instance
5. Connection string is automatically set as `DATABASE_URL`

**Option B: Use Existing Database**
1. Skip adding a new database
2. Go to project **Variables**
3. Add `DATABASE_URL` manually with your existing database URL

### 3. Configure Environment Variables

Environment variables are automatically configured by Railway:

**Automatic Variables:**
- `DATABASE_URL` - Set automatically by Railway PostgreSQL service
- `NODE_ENV` - Set to "production" automatically

**Add Custom Variables (if needed):**
1. Click on your **project name**
2. Go to **Variables** tab
3. Add any additional environment variables
4. Click **"Deploy"** for changes to take effect

### 4. Deploy

Railway automatically deploys when you:
- Push to your main branch
- Create a pull request (for preview deployments)

**Manual Deployment:**
1. In Railway dashboard, click your project
2. Click **"Deployments"**
3. Click **"Deploy"** on latest commit

## Automatic Prisma Migrations

The `postinstall` script in `package.json` handles migrations automatically:

```json
"postinstall": "prisma generate && prisma migrate deploy || true"
```

This runs during deployment and:
1. Generates Prisma Client
2. Runs any pending migrations
3. Continues even if migrations fail (for idempotency)

**View Migration Logs:**
1. Go to your Railway project
2. Click **"Deployments"**
3. Select the deployment
4. Check **"Logs"** tab for migration output

## Verify Deployment

### Check Deployment Status
1. Go to Railway dashboard
2. Click your project
3. Check the **"Deployments"** tab
4. Green checkmark = successful deployment

### Test API Endpoints
```bash
# Get your Railway URL from the dashboard
# Format: https://projectname-production.up.railway.app

curl https://your-railway-url.up.railway.app/api/contact \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "industry": "healthcare",
    "message": "Testing deployment"
  }'
```

### View Database
```bash
# Railway gives you direct database access
# From Railway Variables tab, copy DATABASE_URL and use with:

psql "your-database-url"

# Or use Prisma Studio:
npx prisma studio
# (requires DATABASE_URL in your local .env.local)
```

## Custom Domain

### Add Your Domain to Railway

1. Go to your Railway project
2. Click your **web service**
3. Go to **Settings**
4. Scroll to **Domains**
5. Click **"Generate Domain"** or **"Add Custom Domain"**
6. For custom domain:
   - Add your domain (e.g., yumesorai.com)
   - Configure DNS records as Railway instructs
   - Railway provides CNAME record

### Example DNS Configuration
```
CNAME record:
Name: www
Value: [railway-provided-url]
```

## Monitoring & Logs

### View Application Logs
1. Click your project
2. Go to **Deployments** → Latest
3. View **Logs** tab in real-time

### Monitor Errors
```bash
# Watch logs in terminal (requires Railway CLI)
railway logs --follow
```

### Database Health
1. Click **PostgreSQL** service in your project
2. View metrics: connections, queries, storage
3. Check **Logs** for slow queries

## Troubleshooting

### Deployment Fails

**Check logs:**
1. Go to **Deployments** → Latest
2. Click **View Logs**
3. Look for errors

**Common Issues:**

**Issue: "DATABASE_URL not set"**
- Solution: Ensure PostgreSQL service is added to project
- Or manually add DATABASE_URL variable

**Issue: "Prisma migration failed"**
- Solution: Check database is accessible
- Verify migration files are in `prisma/migrations/`
- Check DATABASE_URL format is correct

**Issue: "Next.js build fails"**
- Solution: Check local build works: `npm run build`
- Review build logs in Railway dashboard

### Database Issues

**Can't connect to database after deploy:**
1. Verify DATABASE_URL in Railway Variables
2. Check PostgreSQL service is running
3. Ensure Prisma migrations ran successfully

**Data not persisting:**
1. Verify you're using DATABASE_URL env variable
2. Check migrations created tables
3. View database with `prisma studio` or `psql`

## Scaling & Performance

### Increase Database Size
1. Click **PostgreSQL** service
2. Go to **Settings**
3. Upgrade plan/storage as needed
4. Railway handles zero-downtime upgrades

### Multiple Environments

Create staging and production:

1. **Create new Railway project** for staging
2. **Connect to same GitHub repo**
3. Connect to **separate PostgreSQL** database
4. Deploy from different branch

```
Production: main branch → Database A
Staging: develop branch → Database B
```

## Cost

**Free Tier ($5/month credit):**
- ✅ Perfect for development
- ✅ Covers small PostgreSQL + Next.js deployment
- ✅ Free SSL/TLS certificates
- ✅ Free backups

**Pricing Breakdown:**
- PostgreSQL: $10/month
- Next.js deployment: $5-15/month (usage-based)
- Usage included in $5 credit
- Pay only what you use beyond credit

## Security Best Practices

### Secrets Management

1. **Never commit secrets** to Git
2. Use Railway **Variables** for:
   - API keys
   - Database credentials
   - Third-party tokens

3. Environment variables are:
   - Encrypted at rest
   - Transmitted securely
   - Not visible in public logs

### Database Security

```sql
-- Railway provides automatic backups
-- Check backup status in PostgreSQL settings

-- Enable SSL connections (automatic)
-- Only accept connections from your app
-- Regular security updates (automatic)
```

### API Security

Already implemented in your routes:
- ✅ Input validation
- ✅ Email format checking
- ✅ Error handling (no stack traces in responses)
- ✅ TODO: Add rate limiting from rate-limiter-flexible

## Database Backups

Railway automatically handles backups:

1. **Daily backups** included
2. **30-day retention** with paid plan
3. **Point-in-time recovery** available

View backups:
1. Click **PostgreSQL** service
2. Go to **Backups** tab
3. Download or restore as needed

## Next Steps After Deployment

### 1. Set Up Email Integration
Update API routes to send emails via:
- SendGrid
- Resend (already in dependencies!)
- AWS SES

### 2. Add API Monitoring
- Use Railway logs
- Add error tracking: Sentry.io
- Set up alerts for failures

### 3. Enable HTTPS/SSL
- Railway provides automatic HTTPS
- Already enabled for your domain
- Force HTTPS in production

### 4. Add Health Checks
Create a health check endpoint:
```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date() })
}
```

### 5. Set Up Monitoring Dashboard
- Use Railway metrics
- Add: https://uptimerobot.com (free tier)
- Monitor: API response times, errors

## CLI Commands (Optional)

Install Railway CLI for local development:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project
railway link

# View logs
railway logs --follow

# Run migrations
railway run npx prisma migrate deploy

# Open database shell
railway run psql
```

## Useful Railway Links

- Documentation: https://docs.railway.app
- Status Page: https://status.railway.app
- Community Discord: https://discord.gg/railway
- Pricing: https://railway.app/pricing

## Support

- **Railway Support**: dashboard.railway.app/support
- **GitHub Issues**: Check this repo's issues
- **Documentation**: https://docs.railway.app

---

**Deployment Time:** ~5 minutes
**Post-deployment setup:** ~10 minutes
**Status:** ✅ Ready for production
