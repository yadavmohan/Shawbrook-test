// setupProxy.ts
import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: Express) {
  const proxyConfig = {
    target: 'https://unsplash.com',
    changeOrigin: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  app.use(
    '/napi',
    createProxyMiddleware(proxyConfig)
  );
};


// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (app:any) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://unsplash.com',
//       changeOrigin: true,
//     }),
//   )
// }