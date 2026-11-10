CREATE TABLE IF NOT EXISTS post_clicks (
  slug TEXT PRIMARY KEY,
  clicks INTEGER NOT NULL CHECK (clicks >= 0)
);
