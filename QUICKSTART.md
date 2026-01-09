# Lubiri Resort Website - Quick Start Guide

## What's Included

This is a complete, production-ready website for Lubiri Resort with:

- Modern Next.js 14 + TypeScript + Tailwind CSS frontend
- Supabase backend with PostgreSQL database
- Full booking system
- Contact form
- Room management
- Responsive design
- SEO optimized

## Quick Start (5 Minutes)

### 1. Extract Files
```bash
unzip lubiri-resort.zip
cd lubiri-resort
```

### 2. Set Up Supabase (2 minutes)
1. Go to supabase.com and create free account
2. Create new project
3. Go to SQL Editor
4. Copy contents of `supabase/schema.sql`
5. Paste and run in SQL Editor
6. Go to Settings > API and copy:
   - Project URL
   - anon public key

### 3. Configure Environment
Create `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

### 4. Install & Run
```bash
npm install
npm run dev
```

Visit http://localhost:3000

### 5. Deploy to Vercel
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

Then:
1. Go to vercel.com
2. Import GitHub repository
3. Add environment variables
4. Deploy!

## Full Documentation

- See `README.md` for detailed project information
- See `DEPLOYMENT.md` for complete deployment guide

## Key Features

- Room browsing with filtering
- Real-time booking system
- Contact form with database storage
- Responsive mobile design
- Professional styling
- Admin-ready database structure

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- React Hot Toast
- Lucide Icons

## Support

Review the README.md and DEPLOYMENT.md files for comprehensive guides.

---

Built with professional standards for Lubiri Resort, Busia, Kenya.
