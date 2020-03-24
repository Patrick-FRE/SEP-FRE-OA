const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const port = 3000;
console.log('Webpack Server Mode:', process.env.NODE_ENV.toUpperCase());
// handles api proxies
// app.get('/api/route', (req, res) => {
//   res.send(leaderList);
// });

if (process.env.NODE_ENV==='production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}



app.listen(port, () => console.log(`server listening on port ${port}!`)) //listens on port 3000 -> http://localhost:3000/
