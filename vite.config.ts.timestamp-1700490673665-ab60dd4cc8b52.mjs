// vite.config.ts
import { defineConfig } from "file:///E:/GitHub/master-react/node_modules/.pnpm/vite@4.4.5_@types+node@20.8.4_sass@1.69.5/node_modules/vite/dist/node/index.js";
import unocss from "file:///E:/GitHub/master-react/node_modules/.pnpm/unocss@0.56.5_postcss@8.4.31_vite@4.4.5/node_modules/unocss/dist/vite.mjs";
import react from "file:///E:/GitHub/master-react/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { presetAttributify, presetUno, presetIcons } from "file:///E:/GitHub/master-react/node_modules/.pnpm/unocss@0.56.5_postcss@8.4.31_vite@4.4.5/node_modules/unocss/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\GitHub\\master-react";
var vite_config_default = defineConfig({
  base: "https://www.tayrsi.cn/master-react/",
  //envDir:'env', //环境变量加载文件路径
  envPrefix: ["BASE_", "MR_"],
  //vite自定义环境变量默认识别VITE_前缀，在此修改，不能为''
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetAttributify({
          // 属性化前缀
          prefix: "u-",
          // 强制使用前缀
          prefixedOnly: false,
          // 忽略的属性
          ignoreAttributes: [
            "text"
          ]
        }),
        presetIcons()
      ]
    }),
    react()
  ],
  server: {
    port: 8888,
    //开发服务器端口
    open: true
    //自动打开页面
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxHaXRIdWJcXFxcbWFzdGVyLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxHaXRIdWJcXFxcbWFzdGVyLXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9HaXRIdWIvbWFzdGVyLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB1bm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG4vLyBpbXBvcnQgcHJlc2V0QXR0cmlidXRpZnkgZnJvbSAnQHVub2Nzcy9wcmVzZXQtYXR0cmlidXRpZnknXG4vLyBpbXBvcnQgcHJlc2V0SWNvbnMgZnJvbSAnQHVub2Nzcy9wcmVzZXQtaWNvbnMnXG4vLyBpbXBvcnQgcHJlc2V0VW5vIGZyb20gJ0B1bm9jc3MvcHJlc2V0LXVubydcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyAgcHJlc2V0QXR0cmlidXRpZnksIHByZXNldFVubywgcHJlc2V0SWNvbnMgfSBmcm9tICd1bm9jc3MnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOidodHRwczovL3d3dy50YXlyc2kuY24vbWFzdGVyLXJlYWN0LycsXG4gIC8vZW52RGlyOidlbnYnLCAvL1x1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1NTJBMFx1OEY3RFx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxuICBlbnZQcmVmaXg6WydCQVNFXycsJ01SXyddLCAvL3ZpdGVcdTgxRUFcdTVCOUFcdTRFNDlcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcdTlFRDhcdThCQTRcdThCQzZcdTUyMkJWSVRFX1x1NTI0RFx1N0YwMFx1RkYwQ1x1NTcyOFx1NkI2NFx1NEZFRVx1NjUzOVx1RkYwQ1x1NEUwRFx1ODBGRFx1NEUzQScnXG4gIHBsdWdpbnM6IFtcbiAgICB1bm9jc3Moe1xuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRVbm8oKSxcbiAgICAgICAgcHJlc2V0QXR0cmlidXRpZnkoe1xuICAgICAgICAgICAgLy8gXHU1QzVFXHU2MDI3XHU1MzE2XHU1MjREXHU3RjAwXG4gICAgICAgICAgICBwcmVmaXg6ICd1LScsXG4gICAgICAgICAgICAvLyBcdTVGM0FcdTUyMzZcdTRGN0ZcdTc1MjhcdTUyNERcdTdGMDBcbiAgICAgICAgICAgIHByZWZpeGVkT25seTogZmFsc2UsXG4gICAgICAgICAgICAvLyBcdTVGRkRcdTc1NjVcdTc2ODRcdTVDNUVcdTYwMjdcbiAgICAgICAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgJ3RleHQnXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgIHByZXNldEljb25zKCksXG4gICAgICAgXVxuICAgIH0pLFxuICAgIHJlYWN0KClcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODg4OCwgLy9cdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTdBRUZcdTUzRTNcbiAgICBvcGVuOiB0cnVlLCAvL1x1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2MlxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9XG4gIH1cbn0pXG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxTQUFTLG9CQUFvQjtBQUN2UixPQUFPLFlBQVk7QUFJbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFVLG1CQUFtQixXQUFXLG1CQUFtQjtBQVAzRCxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFLO0FBQUE7QUFBQSxFQUVMLFdBQVUsQ0FBQyxTQUFRLEtBQUs7QUFBQTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBO0FBQUEsVUFFZCxRQUFRO0FBQUE7QUFBQSxVQUVSLGNBQWM7QUFBQTtBQUFBLFVBRWQsa0JBQWtCO0FBQUEsWUFDaEI7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsUUFDSCxZQUFZO0FBQUEsTUFDYjtBQUFBLElBQ0gsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
