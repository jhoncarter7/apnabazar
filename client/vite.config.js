import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  server:{
   proxy:{
    '/api':{
      target: 'http://localhost:3000',
      secure: false,
      changeOrigin: true,
    },
   }
  },
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
