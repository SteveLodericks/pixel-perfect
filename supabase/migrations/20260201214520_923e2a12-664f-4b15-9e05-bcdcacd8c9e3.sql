-- Create a function to check if an email exists in profiles (for forgot password validation)
-- This prevents non-users from using the forgot password feature
CREATE OR REPLACE FUNCTION public.email_exists_in_profiles(_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE email = _email
  )
$$;

-- Grant execute to anon so unauthenticated users can check before reset
GRANT EXECUTE ON FUNCTION public.email_exists_in_profiles(text) TO anon;
GRANT EXECUTE ON FUNCTION public.email_exists_in_profiles(text) TO authenticated;