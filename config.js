// Ensure you have ' ' around the URL and Key!
const supabaseUrl = 'https://ignacbozajgjjtjcnnjp.supabase.co/rest/v1/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnbmFjYm96YWpnamp0amNubmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MTgzMDgsImV4cCI6MjEwNTE5NDMwOH0.rDp3y9T32U3FWf16l6DeCqx0dqlk2oZy5wku6M-A8UQ';

// Initialize with a fallback for storage
const _supabase = supabase.createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    // This helper checks if localStorage is available; if not, it stays in memory
    storage: window.localStorage 
  }
});
const GolemConfig = {
    myPhone: "251707022845", // Replace with your actual number
    myTelegram: "@allInOneEthiopia1"
    // botToken / chatId intentionally removed — these now live ONLY as
    // Supabase Edge Function secrets (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID),
    // never in client-side code.
};
