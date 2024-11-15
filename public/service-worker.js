self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/home.html",
        "/about.html",
        "/manifest.json",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
        "/style.css", // Make sure to include your CSS file
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
