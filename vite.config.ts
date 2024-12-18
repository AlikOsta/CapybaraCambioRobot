import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    mkcert(),
  ],
  server: {
    host: '192.168.0.225',
    port: 3000,
  },
  base: '/CapybaraCambioRobot/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  }
})