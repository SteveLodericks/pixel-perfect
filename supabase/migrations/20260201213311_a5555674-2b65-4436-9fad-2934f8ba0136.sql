-- Create a function to get public event data (without created_by)
CREATE OR REPLACE FUNCTION public.get_public_events()
RETURNS TABLE (
  id uuid,
  created_at timestamptz,
  updated_at timestamptz,
  title text,
  description text,
  event_date text,
  event_time text,
  location text,
  capacity text,
  eventbrite_id text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    id,
    created_at,
    updated_at,
    title,
    description,
    date AS event_date,
    "time" AS event_time,
    location,
    capacity,
    eventbrite_id
  FROM public.events
  ORDER BY date DESC;
$$;

-- Grant execute permission to anon and authenticated users
GRANT EXECUTE ON FUNCTION public.get_public_events() TO anon;
GRANT EXECUTE ON FUNCTION public.get_public_events() TO authenticated;