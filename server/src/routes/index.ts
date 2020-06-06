import express from 'express';
import path from 'path';

const router = express.Router();

require('./items')(router);
require('./points')(router);

module.exports = (app: any) => { 
  app.use(router);
  app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
};