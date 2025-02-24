// @ts-check
import { defineConfig, envField } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site:"https://bsheep.netlify.app/",
  integrations: [db(), preact()],
  output: 'server',
  adapter: netlify(),
  env: {
    schema:{
      SUPABASE_URL: envField.string({ context:"server", access:"secret"}),
      SUPABASE_ANON_KEY: envField.string({ context:"server", access:"secret"}),
      // TURSO_DB_URL: envField.string({ context:"server", access:"secret"}),
      // TURSO_DB_AUTH_TOKEN: envField.string({ context:"server", access:"secret"}),
      ASTRO_DB_REMOTE_URL: envField.string({ context:"server", access:"secret"}),
      ASTRO_DB_APP_TOKEN: envField.string({ context:"server", access:"secret"}),
    }
  }
});