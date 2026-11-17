// Офлайн-кэш промежуточного варианта. При обновлении data.js поменяй номер версии.
// Удаляет только свои старые кэши (v1a-zwischen-…), кэш утверждённого приложения не трогает.
var CACHE = 'v1a-zwischen-v1';
var FILES = ['./', './index.html', './data.js', './manifest.webmanifest',
             './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k.indexOf('v1a-zwischen-') === 0 && k !== CACHE; })
      .map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
// Сначала сеть (свежие тексты), без сети — кэш.
self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function(r){
    var copy = r.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); }); return r;
  }).catch(function(){ return caches.match(e.request, { ignoreSearch: true }).then(function(r){ return r || caches.match('./index.html'); }); }));
});
