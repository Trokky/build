import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Static: the configurator runs entirely in the browser, so there is no server on the download
// path — nothing to operate, nothing to abuse, and it keeps working once the page has loaded.
export default defineConfig({
  output: 'static',
  site: 'https://trokky.build',
  integrations: [sitemap()],
})
