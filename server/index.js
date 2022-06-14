const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripPublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require ('express');
const app = express();
const cors = require('cors');
const { router } = require('./router/index');
require('dotenv').config();

PORT = 3001;


const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig)); //cors access
app.use(express.json()); // body parser
app.use(express.static('public'));
app.use(router); //router

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});