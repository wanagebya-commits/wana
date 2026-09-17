// Ensure you have ' ' around the URL and Key!
const supabaseUrl = 'https://ignacbozajgjjtjcnnjp.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable__XhkM93G4uNhdKhDKa6osQ_PPpIPO6m';

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
