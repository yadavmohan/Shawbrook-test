import { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: Express) {
  const proxyConfig = {
    target: 'https://unsplash.com',
     secure: false,
    changeOrigin: true,
  };

  app.use(
    '/napi',
    createProxyMiddleware(proxyConfig)
  );
};
