import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import process from 'process'

export default ({ mode }) => {
  // charge .env, .env.production, etc + process.env
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [react()],
    define: {
      // ou re-map une VITE si besoin
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'import.meta.env.VITE_BASE_URL_MEDIAS': JSON.stringify(env.VITE_BASE_URL_MEDIAS),
    },
  })
}
