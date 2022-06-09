const { Router } =  require('express');
const {imageRouter} =  require('./imageRouter');
const {userRouter} = require('./userRouter');


const rootRouter = Router();

rootRouter.use('/images', imageRouter);
rootRouter.use('/user', userRouter);


exports.router = rootRouter;