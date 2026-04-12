const CACHE_NAME = 'carbon-v2';
const ASSETS = [
  './',
  './index.html',
  'https://raw.githubusercontent.com/attendancecarbon/Workers_Attendance/main/36ac2e59-7e79-49bd-af4f-bab334e60066.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
