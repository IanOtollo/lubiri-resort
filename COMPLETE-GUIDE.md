# Complete Step-by-Step Guide: From Zip to Live Website

## Prerequisites You Need

Before starting, make sure you have:
- [ ] VSCode installed on your computer
- [ ] Node.js installed (version 18 or higher) - Download from nodejs.org
- [ ] Git installed - Download from git-scm.com
- [ ] A GitHub account (free) - Sign up at github.com
- [ ] A web browser

---

## STEP 1: Download and Extract the Zip File

1. **Download the zip file** (lubiri-resort.zip) to your Downloads folder

2. **Extract the zip file:**
   - **Windows**: Right-click the zip file → "Extract All" → Choose a location (e.g., Desktop or Documents)
   - **Mac**: Double-click the zip file (it extracts automatically)
   - **Linux**: Right-click → "Extract Here"

3. **You should now have a folder called** `lubiri-resort`

---

## STEP 2: Open the Project in VSCode

1. **Open VSCode**

2. **Open the folder:**
   - Click "File" → "Open Folder"
   - Navigate to where you extracted `lubiri-resort`
   - Select the `lubiri-resort` folder
   - Click "Open"

3. **You should now see the project files in the left sidebar**

4. **Open the integrated terminal in VSCode:**
   - Press: `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (Mac)
   - Or: Menu → "Terminal" → "New Terminal"

---

## STEP 3: Set Up Supabase Database (10 minutes)

### 3.1 Create Supabase Account

1. **Go to** https://supabase.com
2. **Click "Start your project"**
3. **Sign up with GitHub** (easiest method)
4. **Authorize Supabase** when prompted

### 3.2 Create a New Project

1. **Click "New Project"** (or "Create a new project")
2. **Fill in the details:**
   - **Name**: `lubiri-resort` (or any name you prefer)
   - **Database Password**: Click "Generate a password" and **SAVE THIS PASSWORD** somewhere safe
   - **Region**: Choose closest to Kenya (I recommend "Mumbai" or "Singapore")
   - **Pricing Plan**: Select "Free" (it's more than enough for now)
3. **Click "Create new project"**
4. **Wait 2-3 minutes** for the project to be created (you'll see a progress bar)

### 3.3 Set Up the Database Tables

1. **Once your project is ready**, in the left sidebar, click **"SQL Editor"**

2. **In VSCode**, open the file: `supabase/schema.sql`
   - Navigate in the left sidebar: lubiri-resort → supabase → schema.sql

3. **Select ALL the code** in that file (Ctrl+A / Cmd+A)

4. **Copy it** (Ctrl+C / Cmd+C)

5. **Go back to Supabase browser** (SQL Editor page)

6. **Click "New query"** (or the + button)

7. **Paste the code** you copied (Ctrl+V / Cmd+V)

8. **Click "Run"** button (bottom right)

9. **You should see "Success. No rows returned"** - this is good!

10. **Verify tables were created:**
    - Click "Table Editor" in the left sidebar
    - You should see 3 tables: `rooms`, `bookings`, `contact_messages`
    - Click on `rooms` - you should see 8 pre-populated rooms

### 3.4 Get Your API Credentials

1. **In Supabase**, click the **gear icon (⚙️)** in the bottom left

2. **Click "API"** in the settings menu

3. **You'll see two important values:**
   - **Project URL** (looks like: `https://abcdefghijk.supabase.co`)
   - **anon public** key (a very long string starting with `eyJ...`)

4. **IMPORTANT: Keep this page open** - you'll need these values in the next step

---

## STEP 4: Configure Environment Variables

1. **In VSCode**, create a new file in the root folder:
   - Right-click the folder name in the sidebar
   - Select "New File"
   - Name it exactly: `.env.local` (don't forget the dot at the beginning!)

2. **Copy this template and paste it into `.env.local`:**

```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

3. **Replace the values:**
   - Replace `your_url_here` with your **Project URL** from Supabase
   - Replace `your_key_here` with your **anon public key** from Supabase

4. **Final result should look like this:**

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNzQyNDAsImV4cCI6MjAwNDY1MDI0MH0.1234567890abcdefghijklmnopqrstuvwxyz
```

5. **Save the file** (Ctrl+S / Cmd+S)

---

## STEP 5: Install Dependencies and Run Locally

1. **In VSCode terminal** (bottom panel), type this command and press Enter:

```bash
npm install
```

**Wait 2-3 minutes** - you'll see lots of text scrolling. This is normal.

2. **Once installation is complete**, run the development server:

```bash
npm run dev
```

3. **You should see:**
```
✓ Ready in 2s
○ Local: http://localhost:3000
```

4. **Open your browser** and go to: http://localhost:3000

5. **You should see the Lubiri Resort website!** Test it:
   - Click through different pages
   - Try to book a room
   - Fill out the contact form

6. **To stop the server**: Press `Ctrl + C` in the terminal

---

## STEP 6: Push to GitHub

### 6.1 Create a GitHub Repository

1. **Go to** https://github.com

2. **Sign in** (or create an account if you don't have one)

3. **Click the "+" icon** in the top right → "New repository"

4. **Fill in the details:**
   - **Repository name**: `lubiri-resort`
   - **Description**: "Official website for Lubiri Resort, Busia"
   - **Visibility**: Public (or Private if you prefer)
   - **DON'T check** "Add a README file" (we already have one)

5. **Click "Create repository"**

6. **Keep this page open** - you'll need the commands shown

### 6.2 Initialize Git and Push

1. **In VSCode terminal**, run these commands one by one:

```bash
git init
```
Press Enter. You should see: "Initialized empty Git repository"

```bash
git add .
```
Press Enter. (This adds all files)

```bash
git commit -m "Initial commit - Lubiri Resort website"
```
Press Enter. You'll see a list of files being committed.

2. **Now, copy the commands from your GitHub page**

They should look like this (but with YOUR username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/lubiri-resort.git
git branch -M main
git push -u origin main
```

3. **Paste and run these commands in VSCode terminal**

4. **You may be prompted to login to GitHub** - follow the prompts

5. **Once complete**, refresh your GitHub repository page - you should see all your files!

---

## STEP 7: Deploy to Vercel

### 7.1 Create Vercel Account

1. **Go to** https://vercel.com

2. **Click "Sign Up"**

3. **Select "Continue with GitHub"** (easiest method)

4. **Authorize Vercel** when prompted

### 7.2 Import Your Project

1. **Click "Add New..."** button → "Project"

2. **You'll see your GitHub repositories**

3. **Find "lubiri-resort"** and click "Import"

4. **Configure your project:**
   - **Project Name**: `lubiri-resort` (or change if you want)
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave default
   - **Output Directory**: Leave default

### 7.3 Add Environment Variables (CRITICAL!)

1. **Before clicking Deploy**, scroll down to "Environment Variables"

2. **Click to expand the section**

3. **Add your first variable:**
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: (paste your Supabase URL - same as in .env.local file)
   - Click "Add"

4. **Add your second variable:**
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: (paste your Supabase anon key - same as in .env.local file)
   - Click "Add"

5. **Double-check both variables are added correctly**

### 7.4 Deploy!

1. **Click "Deploy"** button

2. **Wait 2-3 minutes** - you'll see a progress bar and logs

3. **When you see confetti and "Congratulations!"** - your site is live! 🎉

4. **Click "Visit"** or copy the URL (looks like: `https://lubiri-resort.vercel.app`)

5. **Test your live website:**
   - Navigate through pages
   - Try booking a room
   - Submit a contact form
   - Check if data appears in Supabase

---

## STEP 8: Verify Everything Works

### 8.1 Test the Website

1. Visit your Vercel URL
2. Test each page:
   - [ ] Homepage loads
   - [ ] Rooms page shows all rooms
   - [ ] Booking form works
   - [ ] Contact form works
   - [ ] All navigation works

### 8.2 Check Database

1. **Go to Supabase** → Table Editor
2. **Click "bookings"** - you should see test bookings you made
3. **Click "contact_messages"** - you should see test messages

### 8.3 Get Your URLs

You now have:
- **Live Website**: `https://lubiri-resort.vercel.app`
- **Supabase Dashboard**: `https://supabase.com/dashboard`
- **GitHub Repo**: `https://github.com/YOUR_USERNAME/lubiri-resort`

---

## STEP 9: Making Updates

### To Update Content

**Option 1: Update Database (for rooms, etc.)**
1. Go to Supabase → Table Editor
2. Click the table (e.g., "rooms")
3. Click on any row to edit
4. Changes appear instantly on your website

**Option 2: Update Code (for pages, design, etc.)**
1. Make changes in VSCode
2. Save files
3. Run in terminal:
```bash
git add .
git commit -m "Describe what you changed"
git push
```
4. Vercel automatically deploys your changes (takes 2-3 minutes)

---

## STEP 10: Set Up Custom Domain (Optional)

If you have a domain like `lubiriresort.co.ke`:

1. **In Vercel Dashboard**, go to your project
2. **Click "Settings"** → "Domains"
3. **Click "Add"**
4. **Enter your domain**: `lubiriresort.co.ke`
5. **Follow the DNS configuration instructions**
6. **Add the records to your domain provider**
7. **Wait 24-48 hours for DNS propagation**

---

## Troubleshooting

### Problem: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org

### Problem: Booking form doesn't work
**Solution**: 
1. Check environment variables in Vercel
2. Verify Supabase credentials are correct
3. Check browser console for errors (F12)

### Problem: "Permission denied" on git push
**Solution**: 
1. Run: `git config --global user.email "your-email@example.com"`
2. Run: `git config --global user.name "Your Name"`
3. Try pushing again

### Problem: Build fails on Vercel
**Solution**:
1. Check that environment variables are set
2. Check Vercel deployment logs for errors
3. Verify all files were pushed to GitHub

### Problem: Pages show errors
**Solution**:
1. Check Vercel function logs
2. Verify Supabase is accessible
3. Check browser console (F12) for errors

---

## What You've Built

✅ Professional resort website with Next.js 14
✅ Full booking system with database
✅ Contact form with storage
✅ Responsive mobile design
✅ SEO optimized
✅ Fast and secure
✅ Live on the internet
✅ Auto-deploys when you push to GitHub

---

## Need Help?

1. Check the error message carefully
2. Google the error message
3. Check Vercel deployment logs
4. Check Supabase dashboard for issues
5. Review the README.md and DEPLOYMENT.md files in your project

---

## Quick Reference - Common Commands

```bash
# Start development server
npm run dev

# Stop server
Ctrl + C

# Push changes to GitHub
git add .
git commit -m "your message"
git push

# Install new package
npm install package-name
```

---

Congratulations! Your Lubiri Resort website is now live! 🎉
