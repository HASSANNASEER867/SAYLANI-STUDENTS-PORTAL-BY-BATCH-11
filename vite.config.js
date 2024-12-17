// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@antd': 'E:/react projects/Team M/SAYLANI-STUDENTS-PORTAL-BY-BATCH-11/node_modules/antd'
    }
  }
});
