// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      /* 预设选项 */
    }),
    presetIcons(),
    presetUno()
    // ...自定义预设
  ],
  rules: [
    
  ]
})