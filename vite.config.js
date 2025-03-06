import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "Hospital Adalid",
      "short_name": "HA",
      "description": "Aplicación adalid hospital", 
      "start_url": "./index.html",
      "display": "standalone",
      "background_color": "#fff",
      "theme_color": "#fff",
      "icons": [
        {
          "src": "./assets/imgs/logo.webp",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "./assets/imgs/logo.webp",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
  },
  devOptions:{
    enabled: true
  }

  })],
})
