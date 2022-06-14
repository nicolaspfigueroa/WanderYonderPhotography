const { Router } =  require('express');
const {imageRouter} =  require('./imageRouter');
const {userRouter} = require('./userRouter');
const {stripeRouter} = require('./stripeRouter');


const rootRouter = Router();

rootRouter.use('/images', imageRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/', stripeRouter);


exports.router = rootRouter;