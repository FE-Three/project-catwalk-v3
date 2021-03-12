/* eslint-disable */
const port = 3000;
const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const config = require('../config/config.js')

app.use(express.static(path.join(__dirname, '../build')));

app.get('/item/*', (req, res) =>{
  res.sendFile(path.join(path.join(__dirname, '../build/index.html')));
});
app.get('/:id(\\d+)/', (req, res) =>{
  res.sendFile(path.join(path.join(__dirname, '../build/index.html')));
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});



app.get('*', (req, res) => {
  console.log('req: ', req.query)
  axios({method: 'get',
  headers: {'Authorization': config.config},
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${req.url}`,
})

.then(response => {
  // console.log(response);
  res.status(200).send(response.data);
})
.catch(err => {
  //console.log(err);
  res.status(err.response.status).send(err.response.data);
});
})



// add answer
app.post('qa/questions/:id', (req, res) => {
  const obj = {
      body : req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos
  }
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${req.url}`, obj,
  {
    headers: {'Authorization': config.config},
    method: 'post',
  })
  .then(response => {
    res.status(201).send('Post has been recorded')
  })
  .catch(err => console.log('error with post request: ', err))
})