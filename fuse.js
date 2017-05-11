const path = require('path');
const express = require('express');
const { FuseBox, BabelPlugin, JSONPlugin, CSSPlugin, EnvPlugin, UglifyJSPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'public/js/$name.js',
  plugins: [
    BabelPlugin(),
    JSONPlugin(),
    CSSPlugin(),
    EnvPlugin({ NODE_ENV: 'development' }),
  ],
  sourceMaps: true,
  info: true,
  debug: true,
});

fuse.dev({
  port: 3000,
  root: false,
}, (server) => {
  const app = server.httpServer.app;

  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
});

fuse
  .bundle('bundle')
  .instructions('> main.js')
  .hmr();

fuse.run();
