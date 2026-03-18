import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://czhfvwnbvarojwhqqequ.supabase.co";
const supabaseAnonKey = "sb_publishable_dWrzcFI1JFE52Me9zEZXOg_yzcYaj21";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
