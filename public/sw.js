if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AcUp1BlYwgEP7bCwQruDX/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/AcUp1BlYwgEP7bCwQruDX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/197-d5eed3616a293fc1.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/361-8d9f2e024016bd26.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/685-c75f0f4651a097b8.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/app/about/page-cf180c345b9a8e5d.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/app/books/page-194672ab0b31fd65.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/app/layout-51672e54b083214c.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/app/page-8a127fc60313fcdf.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/app/profile/page-9c1d3e12c92d277c.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/fd9d1056-a004b4dbf706c974.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/main-66797fca95e9b25e.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/main-app-d443fa5310af2b4d.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7ab0b48d9c912bda.js",revision:"AcUp1BlYwgEP7bCwQruDX"},{url:"/_next/static/css/9be2b506e260a07f.css",revision:"9be2b506e260a07f"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/34dd45dcdd6d47ee-s.woff2",revision:"4061e1fa6aa9a45d49aa1737d2826560"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/86fdec36ddd9097e-s.p.woff2",revision:"1a5f20725a57243f64429b25b5f24075"},{url:"/_next/static/media/9e58c89b9633dcad-s.woff2",revision:"566f7796dca987bfa0ca16389bbcfb4d"},{url:"/_next/static/media/a1ab2e69d2f53384-s.woff2",revision:"c73422f422632560946874b11671ded7"},{url:"/_next/static/media/c4a41ea065a0023c-s.woff2",revision:"06e8ee29490189c118050515c65e7d20"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/de2ba2ebf355004e-s.woff2",revision:"207eff257cb1b3c0007a30cda723a750"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
