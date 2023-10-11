import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://www.tayrsi.cn/master-react/',
  plugins: [unocss(),react()],
  server: {
    port: 8888, //开发服务器端口
    open: true, //自动打开页面
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
