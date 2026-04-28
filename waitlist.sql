-- Create the Waitlist table
CREATE TABLE IF NOT EXISTS public."Waitlist" (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    business_type TEXT NOT NULL,
    wallets TEXT NOT NULL,
    monthly_transactions INTEGER NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public."Waitlist" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into the Waitlist table
CREATE POLICY "Allow anonymous inserts" ON public."Waitlist"
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users (like admin) to view the Waitlist
CREATE POLICY "Allow authenticated users to read" ON public."Waitlist"
    FOR SELECT
    TO authenticated
    USING (true);
