import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/', // not needed for a user-page
  plugins: [react()]
})
