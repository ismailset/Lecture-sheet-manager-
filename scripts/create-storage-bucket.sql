-- Create storage bucket for PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('pdfs', 'pdfs', true);

-- Set up RLS policies for the pdfs bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'pdfs');
CREATE POLICY "Public Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'pdfs');
CREATE POLICY "Public Update" ON storage.objects FOR UPDATE USING (bucket_id = 'pdfs');
