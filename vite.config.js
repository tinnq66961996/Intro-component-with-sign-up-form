import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [
//     react(),
//     createHtmlPlugin({
//       minify: true,
//       entry: 'src/main.jsx',
//       template: 'public/index.html',
//       inject: {
//         data: {
//           title: 'index',
//           injectScript: `<script src="./inject.js"></script>`,
//         },
//         tags: [
//           {
//             injectTo: 'body-prepend',
//             tag: 'div',
//             attrs: {
//               id: 'tag',
//             },
//           },
//         ],
//       },
//     }),
//   ],
//   root: './', // Project root directory
//   publicDir: 'public', // Specifies the public directory
//   build: {
//     rollupOptions: {
//       input: 'public/index.html', // Path to your index.html in the public folder
//     },
//   },
// });

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      // entry: 'src/main.jsx',
      template: 'public/index.html', // No need to specify entry here
      inject: {
        data: {
          title: 'index',
          injectScript: `<script src="./inject.js"></script>`,
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'tag',
            },
          },
        ],
      },
    }),
  ],
  root: '.', // Ensure Vite knows to use the root directory
  publicDir: 'public', // Specifies the public directory
  build: {
    outDir: 'dist', // Ensure this matches your Netlify publish directory
    rollupOptions: {
      input: 'public/index.html', // Use the root-relative path to your index.html
    },
  },
});
