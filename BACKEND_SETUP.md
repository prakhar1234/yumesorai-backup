# Backend Setup Guide - PostgreSQL & Prisma

This guide walks you through setting up the PostgreSQL database and Prisma ORM for the Yumesorai website backend.

## Prerequisites

- Node.js 20+ installed
- PostgreSQL 14+ installed locally or access to a cloud PostgreSQL database
- npm or yarn package manager

## Database Setup Options

### Option 1: Local PostgreSQL (Recommended for Development)

#### macOS (using Homebrew)
```bash
# Install PostgreSQL
brew install postgresql@15

# Start PostgreSQL service
brew services start postgresql@15

# Create a new database for Yumesorai
createdb yumesorai

# Optional: Create a dedicated user
createuser yumesorai_user
psql yumesorai -c "ALTER USER yumesorai_user WITH PASSWORD 'your-secure-password';"
psql yumesorai -c "GRANT ALL PRIVILEGES ON DATABASE yumesorai TO yumesorai_user;"
```

#### Linux (Ubuntu/Debian)
```bash
# Install PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql

# Create a new database
sudo -u postgres createdb yumesorai

# Create a dedicated user
sudo -u postgres createuser yumesorai_user
sudo -u postgres psql -c "ALTER USER yumesorai_user WITH PASSWORD 'your-secure-password';"
```

#### Windows
1. Download PostgreSQL installer from https://www.postgresql.org/download/windows/
2. Run installer and follow setup wizard
3. Remember the superuser password set during installation
4. Create database using pgAdmin or psql command line

### Option 2: Cloud PostgreSQL Databases

Choose one of these services:

#### Supabase (Recommended - Free tier available)
1. Go to https://supabase.com
2. Sign up and create a new project
3. Copy the connection string from Settings > Database
4. Use the format: `postgresql://user:password@host:5432/database?schema=public`

#### Neon (Free tier available)
1. Go to https://neon.tech
2. Sign up and create a new project
3. Copy the connection string
4. Use the format: `postgresql://user:password@host/database?schema=public`

#### Railway (Free $5 monthly credit)
1. Go to https://railway.app
2. Create new project and add PostgreSQL service
3. Copy connection string from Connect tab

#### AWS RDS
1. Create RDS PostgreSQL instance via AWS Console
2. Note the endpoint, port, database name, and credentials
3. Create connection string

## Configuration

### 1. Set Up Environment Variables

Copy the example environment file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your database connection string:

```env
# For local PostgreSQL with default credentials:
DATABASE_URL="postgresql://localhost:5432/yumesorai?schema=public"

# For local PostgreSQL with custom user:
DATABASE_URL="postgresql://yumesorai_user:your-password@localhost:5432/yumesorai?schema=public"

# For cloud database (Supabase example):
DATABASE_URL="postgresql://postgres:password@host.supabase.co:5432/postgres?schema=public"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Prisma Migrations

Initialize the database with all tables:

```bash
# Create and run migrations
npx prisma migrate dev --name init
```

This command will:
- Create migration files
- Apply migrations to your database
- Generate Prisma Client

### 4. Verify Database Setup

Open Prisma Studio to view your database:

```bash
npx prisma studio
```

This opens a web UI at http://localhost:5555 where you can view and manage your data.

## Database Schema

The backend handles the following forms with the schema below:

### ContactSubmission
- **Purpose**: General contact/inquiry form
- **Fields**: name, email, company, industry, phone (optional), message, status, timestamps

### DemoRequest
- **Purpose**: Demo/briefing scheduling
- **Fields**: name, email, company, industry, jobTitle, phone, preferredDate, timezone, message (optional), status, timestamps

### RiskBriefing
- **Purpose**: Risk assessment briefing scheduling
- **Fields**: name, email, company, industry, phone (optional), preferredDate, timezone, message (optional), status, timestamps

### FreeAssessment
- **Purpose**: Free legacy system assessment
- **Fields**: name, email, company, industry, systemType, cobolLines (optional), challenges (optional), status, timestamps

### RiskAssessment
- **Purpose**: Detailed risk assessment with scoring
- **Fields**: name, email, company, cobolCodelines, annualBudget, riskScore (optional), generatedReport (optional), status, timestamps

### ROICalculation
- **Purpose**: ROI calculator tracking
- **Fields**: email (optional), company (optional), currentCost, migrationMethod, timelineMonths, estimatedSavings, roiPercentage, breakEvenMonths, timestamps

## API Endpoints

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "industry": "healthcare",
    "phone": "+1-555-0123",
    "message": "Tell us about your legacy systems..."
  }
  ```

### Demo Request
- **Endpoint**: `POST /api/demo`
- **Body**:
  ```json
  {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "company": "Tech Corp",
    "industry": "banking",
    "jobTitle": "CTO",
    "phone": "+1-555-0456",
    "preferredDate": "2024-07-15",
    "preferredTime": "14:00",
    "timezone": "EST",
    "message": "Interested in the platform"
  }
  ```

### Risk Briefing
- **Endpoint**: `POST /api/risk-briefing`
- **Body**:
  ```json
  {
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "company": "Legacy Systems Inc",
    "industry": "government",
    "phone": "+1-555-0789",
    "preferredDate": "2024-07-20",
    "preferredTime": "10:00",
    "timezone": "CST",
    "message": "Need risk assessment"
  }
  ```

### Assessment
- **Endpoint**: `POST /api/assessment`
- **Body**:
  ```json
  {
    "name": "Alice Brown",
    "email": "alice@example.com",
    "company": "Enterprise Co",
    "industry": "airlines",
    "systemType": "COBOL",
    "cobolLines": 500000,
    "challenges": "Aging systems, skill gaps"
  }
  ```

### ROI Calculator
- **Endpoint**: `POST /api/roi-calculator`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "company": "Company Name",
    "currentCost": 500000,
    "migrationMethod": "phased",
    "timelineMonths": 24,
    "estimatedSavings": 250000,
    "roiPercentage": 50,
    "breakEvenMonths": 12
  }
  ```

## Next Steps

### 1. Email Integration (TODO)
The API routes have TODOs for email notifications. Integrate with:
- **SendGrid** for transactional emails
- **Mailchimp** for marketing emails
- **AWS SES** for high-volume emails

### 2. CRM Integration (TODO)
Connect with HubSpot, Salesforce, or your CRM system for:
- Automatic lead creation
- Pipeline management
- Contact enrichment

### 3. Calendar Integration (TODO)
For demo/briefing scheduling:
- Google Calendar API
- Calendly integration
- Outlook Calendar integration

### 4. Analytics (TODO)
- Form submission tracking
- Conversion funnel analysis
- Lead source attribution

## Development Commands

```bash
# Start dev server
npm run dev

# Open Prisma Studio
npx prisma studio

# Generate Prisma Client (after schema changes)
npx prisma generate

# Create a new migration
npx prisma migrate dev --name description

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# View database schema
npx prisma db pull

# Format schema file
npx prisma format
```

## Troubleshooting

### Connection Issues
**Problem**: `ECONNREFUSED` or connection timeout
**Solution**:
1. Verify PostgreSQL is running: `psql -U postgres -d postgres -c "SELECT 1"`
2. Check DATABASE_URL is correct in .env.local
3. Ensure network connectivity for cloud databases
4. Check firewall rules for cloud databases

### Migration Issues
**Problem**: Migration fails during `prisma migrate dev`
**Solution**:
1. Check database exists and is accessible
2. Ensure all migration files are in `prisma/migrations/`
3. If corrupted, try: `npx prisma migrate resolve --rolled-back migration_name`
4. For development, reset: `npx prisma migrate reset`

### Port Conflicts
**Problem**: `Port 5432 already in use`
**Solution**:
```bash
# Find process using port 5432
lsof -i :5432

# Kill process (macOS/Linux)
kill -9 PID

# Or use different port in connection string
DATABASE_URL="postgresql://localhost:5433/yumesorai?schema=public"
```

## Production Deployment

### Pre-deployment Checklist
- [ ] All environment variables set in production
- [ ] Database backups enabled
- [ ] Connection pooling configured (for Prisma)
- [ ] SSL enabled for database connections
- [ ] Environment-specific secrets (.env.production)

### Deploying to Vercel
1. Add `DATABASE_URL` to Vercel project settings
2. Run migrations: `npx prisma migrate deploy`
3. Ensure build logs show successful migration

### Deploying to Other Platforms
Update `package.json` postinstall script:
```json
{
  "scripts": {
    "postinstall": "prisma generate && prisma migrate deploy"
  }
}
```

## Support & Resources

- Prisma Documentation: https://www.prisma.io/docs/
- PostgreSQL Documentation: https://www.postgresql.org/docs/
- Prisma Community: https://www.prisma.io/community
- Database Design Best Practices: https://en.wikipedia.org/wiki/Database_normalization

## Security Best Practices

1. **Never commit .env.local** - Add to .gitignore
2. **Use strong passwords** - Especially for production
3. **Enable SSL** - For all remote connections
4. **Rotate credentials regularly** - Especially after breaches
5. **Limit database access** - Use VPCs and security groups
6. **Monitor queries** - Set up slow query logs
7. **Backup regularly** - Test restore procedures
8. **Use connection pooling** - PgBouncer or Prisma connection pooling
