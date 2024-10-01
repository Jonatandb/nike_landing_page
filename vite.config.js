import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "development" ? "/" : "/nike_landing_page/",
  build: {
    outDir: "docs",
  }
}))
