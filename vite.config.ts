import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
// import presetAttributify from '@unocss/preset-attributify'
// import presetIcons from '@unocss/preset-icons'
// import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import path from 'path'
import {  presetAttributify, presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://www.tayrsi.cn/master-react/',
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetAttributify({
            // 属性化前缀
            prefix: 'u-',
            // 强制使用前缀
            prefixedOnly: false,
            // 忽略的属性
            ignoreAttributes: [
              'text'
            ]
          }),
        presetIcons(),
       ]
    }),
    react()
  ],
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

function unopreset() {
  throw new Error('Function not implemented.')
}

