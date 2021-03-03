const port = 3000;
const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


app.use(express.static(path.join(__dirname, '../public')));

app.get('/item/*', (req, res) =>{
  res.sendFile(path.join(path.join(__dirname, '../public/index.html')));
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});



app.get('*', (req, res) => {
  console.log('where is req url??', req.url);
  axios({method: 'get',
         headers: {'Authorization': '2729e05f13787e05f65ecafdeb506b6c980d2b7b'},
         url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${req.url}`
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