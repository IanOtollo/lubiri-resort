# Lubiri Resort - Official Website

A professional, full-stack resort booking website built with Next.js 14, TypeScript, and Supabase.

## Features

- Modern, responsive design
- Room browsing and booking system
- Real-time availability checking
- Contact form with email notifications
- Gallery with resort photos
- Dining and amenities information
- Admin dashboard (coming soon)
- Supabase backend integration

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd lubiri-resort
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API
3. Copy your project URL and anon key
4. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set up the database

Run the SQL commands in `supabase/schema.sql` in your Supabase SQL editor to create the necessary tables.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website. ^/(or any local port number available on your PC)

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

## Project Structure

```
lubiri-resort/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── rooms/             # Rooms pages
│   ├── dining/            # Dining page
│   ├── amenities/         # Amenities page
│   ├── gallery/           # Photo gallery
│   ├── contact/           # Contact page
│   └── booking/           # Booking pages
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                   # Utilities
│   └── supabase.ts       # Supabase client
├── types/                 # TypeScript types
└── public/               # Static assets
```

## Contact

Lubiri Resort  
Busia County, Kenya  
Phone: +254 733 510377

## License

© 2024 Lubiri Resort. All rights reserved.
