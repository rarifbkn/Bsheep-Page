// @ts-check
import { defineConfig, envField } from 'astro/config';

import preact from '@astrojs/preact';

import db from "@astrojs/db";


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  site:"https://bsheep.netlify.app/",
  integrations: [preact(), db()],
  output: 'server',
  adapter: netlify(),
});