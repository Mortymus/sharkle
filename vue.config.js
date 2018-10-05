module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/sharkle/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 1024000 }));

        config.module
            .rule('media')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 1024000 }));

    }
}