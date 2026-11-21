declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    APP_OWNER_EMAIL?: string;
    APP_ADMIN_EMAILS?: string;
    TELEGRAM_BRIDGE_SECRET?: string;
    TELEGRAM_BOT_USERNAME?: string;
  }
}
