const cacheName = 'currency-converter-v2';

const filesToCache = [
  './',
  './js/app.js',
  './js/bootstrap.min.js',
  './css/style.css',
  './css/bootstrap.min.css',
  'https://free.currencyconverterapi.com/api/v5/currencies',
]

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate fires when the service worker becomes active.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map(function(key){
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});



