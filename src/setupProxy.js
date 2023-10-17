const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/napi',{
      target: 'https://unsplash.com',
      secure:false,
      changeOrigin: true,
    }),
  )
}