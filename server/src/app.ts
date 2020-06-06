import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

require('./routes/index')(app);

module.exports = app;