// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
// workbox.routing.registerRoute(
//     ({ request }) => request.destination === 'image',
//     new workbox.strategies.CacheFirst({
//         // new workbox.strategies.NetworkFirst({
//         cacheName: 'images',
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50,
//                 maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//             }),
//         ],
//     })
// );

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('forex-clock-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './style.css',
                './script.js',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(resp => {
            return resp || fetch(event.request);
        })
    );
});
F