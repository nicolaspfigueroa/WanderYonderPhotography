const { Router } =  require('express');
const {imageRouter} =  require('./imageRouter');


const rootRouter = Router();

rootRouter.use('/images', imageRouter);


exports.router = rootRouter;