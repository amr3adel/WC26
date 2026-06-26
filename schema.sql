-- SQL script to initialize tables for the World Cup 2026 Prediction Pool in Supabase
-- Copy and paste this script into your Supabase SQL Editor (https://supabase.com) to create the tables.

-- 1. Create Players Table
CREATE TABLE IF NOT EXISTS public.wc26_players (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    handle TEXT,
    favorite TEXT,
    color TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Predictions Table
CREATE TABLE IF NOT EXISTS public.wc26_predictions (
    player_id TEXT NOT NULL,
    match_id TEXT NOT NULL,
    home TEXT NOT NULL,
    away TEXT NOT NULL,
    home_scorer TEXT DEFAULT '',
    away_scorer TEXT DEFAULT '',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (player_id, match_id)
);

-- 3. Create Specials (Tournament Calls) Table
CREATE TABLE IF NOT EXISTS public.wc26_specials (
    player_id TEXT PRIMARY KEY,
    champion TEXT DEFAULT '',
    finalist TEXT DEFAULT '',
    top_scorer TEXT DEFAULT '',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create Results Table (Official match scores)
CREATE TABLE IF NOT EXISTS public.wc26_results (
    match_id TEXT PRIMARY KEY,
    home TEXT NOT NULL,
    away TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Disable Row Level Security (RLS) to allow anonymous read/write access via the client anon key.
-- Since this is a private pool for friends accessed via email invite links, RLS is disabled
-- to allow instant client-side queries.
ALTER TABLE public.wc26_players DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.wc26_predictions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.wc26_specials DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.wc26_results DISABLE ROW LEVEL SECURITY;
