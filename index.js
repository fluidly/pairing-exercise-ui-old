const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const data = require('./data.json')

const app = express()

const port = process.env.PORT || 9000;

const staticPath = path.join(__dirname, './build');

app.set('trust proxy', 1);

app.use(bodyParser.json());

app.use(express.static(staticPath));

app.get('/data', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}`);
});
