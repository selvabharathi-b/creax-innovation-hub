-- Create certifications table
CREATE TABLE public.certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id text NOT NULL UNIQUE,
  recipient_name text NOT NULL,
  course_name text NOT NULL,
  issue_date date NOT NULL,
  expiry_date date,
  status text NOT NULL DEFAULT 'active',
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can view active certifications"
ON public.certifications
FOR SELECT
USING (is_active = true);

CREATE POLICY "Admins can view all certifications"
ON public.certifications
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage certifications"
ON public.certifications
FOR ALL
USING (has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_certifications_updated_at
  BEFORE UPDATE ON public.certifications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();