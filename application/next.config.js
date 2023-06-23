// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const routing = require("./next.config/routing");

const nextConfig = {
    compiler: {
        reactRemoveProperties: true,
        styledComponents: true,
    },
    i18n: {
        locales: ["de-DE", "de-AT", "de-CH"],
        defaultLocale: "de-DE",
        localeDetection: false,
    },
    productionBrowserSourceMaps: true,
    swcMinify: true,
    async rewrites() {
        return routing;
    },
};

module.exports = nextConfig;
