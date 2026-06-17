import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 通常（同じWi-FiのスマホでHMRライブ編集）: 素の `npm run dev`。
  //   host: true で 0.0.0.0 待ち受け → スマホから http://<MacのLAN IP>:5173 で見られる。
  //   hmr は指定しない＝vite が自動でページURL(ws://<LAN IP>:5173)に繋ぐのでHMRが効く。
  // Dev Tunnels で共有するとき: `VITE_TUNNEL=1 npm run dev`。
  //   hmr を wss/443 に向けないと外部ブラウザで読み込みが止まるため切り替える。
  server: {
    host: true,
    allowedHosts: ['.devtunnels.ms'],
    ...(process.env.VITE_TUNNEL === '1'
      ? { hmr: { protocol: 'wss', clientPort: 443 } }
      : {}),
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
