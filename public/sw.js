const CACHE_NAME = 'pwa-caache-v1';
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/app.js",
    "/assets/icons/logo.webp"                    
]

// Aqui hacemos el precaching para que al momento de instalar el SW, se almacenen en cache los archivos de urlsToCache
self.addEventListener("install", (e) => {
    e.waitUntil(
        // en el cache esta guardando todos los archivos del array de urls.
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Implementamos estrategia cache first.
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});