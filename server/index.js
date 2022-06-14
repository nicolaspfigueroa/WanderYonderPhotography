const express = require ('express');
const app = express();
const cors = require('cors');
const { router } = require('./router/index');

PORT = 3001;

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').load()
// }

const corsConfig = {
  // REMOVE-START
  origin: 'http://localhost:3000',
  credentials: true,
  // REMOVE-END
};

app.use(cors(corsConfig)); //cors access
app.use(express.json()); // body parser
app.use(router); //router

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});