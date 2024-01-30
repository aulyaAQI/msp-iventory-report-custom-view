import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {exec} from 'child_process';
import {createProxyMiddleware} from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), ''); // import semua .env variable
  return {
    define: {
      'process.env': env, // support .env value saat build
    },
    plugins: [
      vue(),
      {
        name: 'post-build-commands',
        closeBundle: () => {
          exec('npm run copy-build-file-to-kintone && akcu once ', (err, stdout, stderr) => {
            if (err) {
              console.log({stderr});
              return;
            }

            console.log({stdout});
          });
        },
      },
    ],
    build: {
      lib: {
        entry: 'src/main.js',
        name: 'kintone-custom-view-vue',
      },
      rollupOptions: {
        output: {
          format: 'iife', // pastikan ke format iief agar hasil build menjadi vannila javascript
          entryFileNames: 'kintone-custom-view-vue.js', //sesuaikan penamaan hasil build dengan nama file yang di inginkan
          assetFileNames: 'app-[name].css', // ignore karena kintone menyarankan css dan style di manage setiap view
          chunkFileNames: 'chunk-[name].js', // ignore karena belum ada support kintone build dengan split file
          manualChunks: undefined,
        },
      },
      outDir: './dist', // definisi nama folder build
    },
  };
});
