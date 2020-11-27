
const express = require('express');
const cors = require('cors');

const querymaker = require('./querymaker');

const app = express();
const port = 3000

app.use(cors()); // configure to be safer

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getTherapists', async (req, res) => {
  try {
    const therapist = await querymaker.getTherapists();
    res.send(therapist);
  } catch(e) {
    res.send('ERROR');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})