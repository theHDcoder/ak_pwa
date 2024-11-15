import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "vite-plugin-pwa",
      transformIndexHtml(html) {
        return html.replace(
          "</head>",
          `
            <link rel="manifest" href="/manifest.json">
            <script src="/service-worker.js" defer></script>
          </head>`
        );
      },
    },
  ],
});
