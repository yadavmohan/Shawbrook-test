import { Express } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';

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




