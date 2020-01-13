require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    const books = ['Deathly Hollows', 'Name of the Wind', 'Golden Compass', 'Way of Kings'];
    res.send(books);
  })

app.listen(port, () =>{
    console.log(`Running on port ${port}`)
});