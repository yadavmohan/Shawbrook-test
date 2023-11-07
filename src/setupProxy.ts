// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app: any) {
//   app.use(
//     '/napi',
//     createProxyMiddleware({
//       target: 'https://unsplash.com',
//       changeOrigin: true,
//       pathRewrite:""
//     })
//   );
// };
import { Express } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
//const { createProxyMiddleware, Options } = require('http-proxy-middleware');
module.exports = function (app: Express) {
  const proxyConfig: Options = {
    target: 'https://unsplash.com',
    secure: false,
    changeOrigin: true,
  };

  app.use(
    '/napi',
    createProxyMiddleware(proxyConfig)
  );
};