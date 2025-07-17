import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rijpajpepfstlmkfiuta.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpanBhanBlcGZzdGxta2ZpdXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1Mzk4ODksImV4cCI6MjA2ODExNTg4OX0.dktr8ihNiVF5I-Jme7ezrqPSGRKK88evl_mlQFcGLBU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);