import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5177
  },
  resolve: {
    // 配置路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
