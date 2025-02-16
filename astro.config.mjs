// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site:"https://bsheep.netlify.app/",
  integrations: [db(), preact()],
  output: 'server',
  adapter: netlify(),
});