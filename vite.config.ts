import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000, // You can specify the port you want to use
  },
  preview: {
    host: '0.0.0.0',
    port: 3000, // You can specify the port you want to use
    allowedHosts: ['candidate-search-czqt.onrender.com'], // Add your Render host here
  },  
});
