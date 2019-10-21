import http from 'http'; // Heroku handles the https thing already
import express from 'express';
import path from 'path';

import getUnnanotatedImageNames from './getUnnanotatedImageNames';
import saveAnnotation from './saveAnnotation';

const app = express();
const server = http.createServer(app);

app.use('/getUnnanotatedImageNames', async (_, res) => {
  'Returns the names of the images in /images that are not annotated';

  const unnanotatedImageNames = await getUnnanotatedImageNames();
  res.send(unnanotatedImageNames);
});

app.use('/saveAnnotation', async (req, res) => {
  'Saves the annotations';

  await saveAnnotation(req.query);
  res.send({ success: true });
});

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/', express.static(path.join(__dirname, '/client')));


server.listen(8080);
