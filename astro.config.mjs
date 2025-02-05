// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});