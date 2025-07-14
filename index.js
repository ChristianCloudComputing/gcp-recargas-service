const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Configure CORS - allow all origins for development/testing
app.use(cors({
  origin: '*', // In production, replace with your specific domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: false
}));

app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.post('/', async (req, res) => {
  try {
    const recarga = req.body;
    await publishPubSubMessage(recarga);
    res.status(204).send();
  }
  catch (ex) {
    console.log(ex);
    res.status(500).send(ex);
  }
})

async function publishPubSubMessage(recarga) {
  const buffer = Buffer.from(JSON.stringify(recarga));
  await pubsub.topic('gcp-recargas').publish(buffer);
}