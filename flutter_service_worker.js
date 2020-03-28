'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/images/home.png": "954657f2e72d288e22cf65fcf9efd3da",
"/assets/images/sandwich.png": "f26636ec283819d2f00b354051230178",
"/assets/images/2.jpg": "2801d492e4c469741ef27ffb731b9967",
"/assets/images/4.jpeg": "faf124acb9be50e45a2e96b2cb674828",
"/assets/images/target.png": "8d816ef6e4f5ad43c1e75dcef3639c64",
"/assets/images/food.jpg": "bc42f2927c5fa2beebb9dec2a0097e3b",
"/assets/images/5.jpg": "24e13583abdc648f0a9a8f74eeb8f3a5",
"/assets/images/steak.png": "569d145faf2f1cb6d49b57da3f074b88",
"/assets/images/1.jpg": "f67b1586d809a38c0b6a8ff961c35ecc",
"/assets/images/ice-cream.png": "e23dfbb77f2f3f0cefbe31c71cb1576c",
"/assets/images/avatar.png": "356d6964a5aa0aa06391b83c31bb3f36",
"/assets/images/salad.png": "c3c56aaa6580021e24021e43ad2567b0",
"/assets/images/fish.png": "1c1c127e3f56f5938083fa11ded45bf7",
"/assets/images/pint.png": "d812752becef94933ea359882bd66617",
"/assets/images/3.jpg": "03bffe39c8c2aa87383253e63ac72d14",
"/assets/images/shopping-bag.png": "b933a76b252d1de63a81e703b68aab64",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "285caf07fc4017731f19b33391d3fa71",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "c3318728720459604afcf8ad21df4512"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
