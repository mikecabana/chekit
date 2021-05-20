module.exports = {
    images: {
        domains: ['picsum.photos', 'tailwindui.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
