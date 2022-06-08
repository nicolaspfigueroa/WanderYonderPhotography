const express = require ('express');
const app = express();
const cors = require('cors');
const { router } = require('./router/index');

PORT = 3001;

app.use(cors()); //cors access
app.use(express.json()); // body parser
app.use(router); //router

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});