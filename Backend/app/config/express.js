const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const path =require('path');

const PUBLIC_RESOURCES = path.resolve(__dirname, '..', '..', '..', 'Frontend');
const PATH_ROUTES = path.resolve(__dirname, '..');

module.exports = function() {
  const app = express();
  console.log(PATH_ROUTES);
  console.log(PUBLIC_RESOURCES);
  // ======================================
  // # Middlewares
  // ======================================
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(expressValidator());
  consign({cwd: PATH_ROUTES}).include('routes').into(app);
  app.use(express.static(PUBLIC_RESOURCES));
  return app;
}
