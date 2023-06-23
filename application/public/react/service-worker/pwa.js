importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
    workbox.setConfig({ debug: false });

    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "wcom-static",
        })
    );

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "wcom-images",
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 900, // 15 minutes
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/cs3\.wettercomassets\.com/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "wcom-assets",
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 900, // 15 minutes
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/d1azc1qln24ryf\.cloudfront\.net/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "cloudfront-static",
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 3600, // 1 hour
                }),
            ],
        })
    );

    workbox.routing.registerRoute(
        /\//,
        new workbox.strategies.NetworkFirst({
            cacheName: "wcom-sites",
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 30,
                }),
            ],
        })
    );

    workbox.googleAnalytics.initialize();
} else {
    console.error("could not load workbox");
}
