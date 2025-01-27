import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/assignment/', // Your repo name
  plugins: [react()],
});
