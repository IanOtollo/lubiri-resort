# Lubiri Resort Website - Deployment Guide

This guide will walk you through deploying the Lubiri Resort website to Vercel with Supabase backend.

## Prerequisites

- Node.js 18+ installed
- GitHub account
- Vercel account (free)
- Supabase account (free)

## Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: "lubiri-resort"
   - Database Password: (generate a strong password and save it)
   - Region: Choose closest to Kenya (e.g., Mumbai)
5. Wait for project to be created (2-3 minutes)

### Configure Database

1. In your Supabase dashboard, go to "SQL Editor"
2. Open the file `supabase/schema.sql` from this project
3. Copy all the SQL code
4. Paste it into the Supabase SQL Editor
5. Click "Run" to execute the schema
6. Verify tables were created by going to "Table Editor"

### Get API Credentials

1. Go to Project Settings > API
2. Copy these values (you'll need them later):
   - Project URL (looks like: https://xxxxx.supabase.co)
   - anon/public key (long string starting with "eyJ...")

## Step 2: Prepare Your Local Environment

1. Extract the zip file
2. Open terminal/command prompt in the project folder
3. Create `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace the values with your actual Supabase credentials.

## Step 3: Test Locally (Optional but Recommended)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to test the site locally.

## Step 4: Push to GitHub

1. Create a new repository on GitHub:
   - Go to github.com
   - Click "New repository"
   - Name it "lubiri-resort"
   - Keep it public or private (your choice)
   - Don't initialize with README (we already have one)

2. In your terminal, run:

```bash
git init
git add .
git commit -m "Initial commit - Lubiri Resort website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lubiri-resort.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" > "Project"
3. Import your GitHub repository (lubiri-resort)
4. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: .next (default)

5. **Important: Add Environment Variables**
   Click "Environment Variables" and add:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
     Value: (your Supabase URL)
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     Value: (your Supabase anon key)

6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? lubiri-resort
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
# (paste your Supabase URL when prompted)

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# (paste your Supabase anon key when prompted)

# Deploy to production
vercel --prod
```

## Step 6: Verify Deployment

1. Once deployed, you'll get a URL like: `https://lubiri-resort.vercel.app`
2. Visit the URL and test:
   - Homepage loads correctly
   - Navigate to different pages
   - Test booking form (create a test booking)
   - Test contact form (send a test message)
3. Check Supabase database to verify data is being saved

## Step 7: Custom Domain (Optional)

If you have a custom domain (e.g., lubiriresort.co.ke):

1. In Vercel dashboard, go to your project
2. Go to Settings > Domains
3. Add your domain
4. Follow instructions to configure DNS records with your domain provider

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Ensure Supabase credentials are valid
- Check build logs in Vercel dashboard

### Booking Form Not Working
- Verify Supabase tables exist (check Table Editor)
- Check browser console for errors
- Verify environment variables are set in Vercel

### Images Not Loading
- Placeholder gradients are used by default
- Replace with real images in `/public/images/` directory
- Update image paths in the code

## Post-Deployment

### Update Content
1. To update room information:
   - Go to Supabase Table Editor
   - Edit the `rooms` table directly
   - Changes reflect immediately

2. To modify pages:
   - Edit files in VSCode
   - Commit and push to GitHub
   - Vercel auto-deploys changes

### Monitor
- Check Vercel dashboard for:
  - Traffic analytics
  - Function logs
  - Performance metrics
- Check Supabase dashboard for:
  - Database usage
  - API requests
  - Storage

## Maintenance

- Supabase free tier: 500 MB database, 2 GB bandwidth/month
- Vercel free tier: Unlimited bandwidth, 100 GB-hours compute
- Both are sufficient for small to medium traffic

## Support

For issues:
1. Check logs in Vercel dashboard
2. Check Supabase dashboard for database issues
3. Review README.md for configuration details

## Security Notes

- Never commit `.env.local` file to GitHub (it's in .gitignore)
- Keep Supabase credentials secure
- Use Supabase RLS (Row Level Security) for production
- Consider adding rate limiting for booking forms

---

Your Lubiri Resort website is now live! 🎉
