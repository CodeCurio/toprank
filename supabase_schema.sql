-- ========================================================
-- TOPRANK DIGITAL SERVICE - SUPABASE DATABASE SCHEMA
-- Execute this SQL in Supabase SQL Editor (https://supabase.com/dashboard)
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------
-- 1. BLOGS TABLE (Dynamic CMS Blog Post Engine)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    category VARCHAR(100) DEFAULT 'Digital Marketing',
    tags TEXT[] DEFAULT '{}',
    author_name VARCHAR(100) DEFAULT 'TopRank Editorial Team',
    author_role VARCHAR(100) DEFAULT 'SEO Specialist',
    author_avatar TEXT,
    read_time VARCHAR(50) DEFAULT '5 min read',
    published BOOLEAN DEFAULT true,
    views_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for fast slug lookup & listing
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs(published);

-- --------------------------------------------------------
-- 2. PORTFOLIOS TABLE (Dynamic Case Studies & Work Engine)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    cover_image TEXT,
    summary TEXT NOT NULL,
    challenge TEXT,
    solution TEXT,
    content TEXT,
    live_url TEXT,
    technologies TEXT DEFAULT 'Next.js, React, Tailwind CSS, SEO',
    results_metrics JSONB DEFAULT '[]'::jsonb, -- e.g. [{"label":"Monthly Inquiries","value":"+314%"}]
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for fast portfolio lookup
CREATE INDEX IF NOT EXISTS idx_portfolios_slug ON public.portfolios(slug);
CREATE INDEX IF NOT EXISTS idx_portfolios_published ON public.portfolios(published);
CREATE INDEX IF NOT EXISTS idx_portfolios_featured ON public.portfolios(featured);

-- --------------------------------------------------------
-- 3. LEADS & CONTACT ENQUIRIES TABLE
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    service_requested VARCHAR(100) DEFAULT 'General Enquiry',
    city VARCHAR(100) DEFAULT 'Lucknow',
    message TEXT,
    status VARCHAR(50) DEFAULT 'New', -- 'New', 'Contacted', 'Closed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- --------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if updating
DROP POLICY IF EXISTS "Public Read Published Blogs" ON public.blogs;
DROP POLICY IF EXISTS "Public Read Published Portfolios" ON public.portfolios;
DROP POLICY IF EXISTS "Public Submit Leads" ON public.leads;
DROP POLICY IF EXISTS "Admin Full Access Blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admin Full Access Portfolios" ON public.portfolios;
DROP POLICY IF EXISTS "Admin Full Access Leads" ON public.leads;

-- Public READ access for published blogs & portfolios
CREATE POLICY "Public Read Published Blogs" 
    ON public.blogs FOR SELECT 
    USING (published = true);

CREATE POLICY "Public Read Published Portfolios" 
    ON public.portfolios FOR SELECT 
    USING (published = true);

-- Public INSERT access for Contact Form Leads
CREATE POLICY "Public Submit Leads" 
    ON public.leads FOR INSERT 
    WITH CHECK (true);

-- Admin (Authenticated User / Anon during setup / Service Role) FULL ACCESS
CREATE POLICY "Admin Full Access Blogs" 
    ON public.blogs FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role' OR auth.role() = 'anon');

CREATE POLICY "Admin Full Access Portfolios" 
    ON public.portfolios FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role' OR auth.role() = 'anon');

CREATE POLICY "Admin Full Access Leads" 
    ON public.leads FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role' OR auth.role() = 'anon');

-- --------------------------------------------------------
-- 5. SEED INITIAL SAMPLE CASE STUDIES (OPTIONAL)
-- --------------------------------------------------------
INSERT INTO public.portfolios (
    slug, title, client_name, industry, location, cover_image, summary, challenge, solution, content, live_url, technologies, results_metrics, featured, published
) VALUES 
(
    'atulaya-healthcare-growth',
    'Scaling Atulaya Healthcare to #1 Local Diagnostics Center in Lucknow',
    'Atulaya Healthcare',
    'Healthcare & Diagnostics',
    'Lucknow, UP',
    '/images/hero_success_healthcare.webp',
    'Engineered a complete local SEO and high-speed web infrastructure resulting in 314% surge in verified diagnostic patient inquiries within 90 days.',
    'Low visibility on Google Maps 3-Pack, slow legacy website taking 6+ seconds to load, and high customer acquisition costs.',
    'Deployed sub-second Next.js patient booking portal, optimized Google Business Profile with 100+ local citations, and launched automated WhatsApp appointment confirmations.',
    '<p>Atulaya Healthcare partnered with TopRank Digital to overhaul their digital presence in Gomti Nagar and Hazratganj. We restructured their entire keyword strategy around high-intent diagnostic terms.</p>',
    'https://atulaya.com',
    'Next.js, Local SEO, WhatsApp Automation, Google Maps',
    '[{"label":"Patient Inquiries","value":"+314%"},{"label":"Page Load Speed","value":"0.7s"},{"label":"Google Maps 3-Pack","value":"#1 Rank"}]'::jsonb,
    true,
    true
)
ON CONFLICT (slug) DO NOTHING;
