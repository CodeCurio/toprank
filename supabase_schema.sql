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
    results_metrics JSONB DEFAULT '[]'::jsonb, -- e.g. [{"label":"Growth","value":"+314%"}]
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for fast portfolio lookup
CREATE INDEX IF NOT EXISTS idx_portfolios_slug ON public.portfolios(slug);

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

-- Admin (Authenticated User / Service Role) FULL ACCESS
CREATE POLICY "Admin Full Access Blogs" 
    ON public.blogs FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Admin Full Access Portfolios" 
    ON public.portfolios FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Admin Full Access Leads" 
    ON public.leads FOR ALL 
    USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');
