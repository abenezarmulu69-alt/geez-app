const CACHE='geez-v2';
const FILES=['./index.html','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('./'));});
self.addEventListener('push',e=>{e.waitUntil(self.registration.showNotification('ግእዝ ቋንቋ 🙏',{body:'ሰላም ውድ ምዕምናን! ለ10 ደቂቃ ግእዝን ተምረው ውዳሴ ማርያምን ያዳምጡ። ✦',tag:'geez-daily',renotify:true}));});
