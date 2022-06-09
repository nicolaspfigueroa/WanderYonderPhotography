const { Router } = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

const router = Router();

router.post('/login', userController.login);
router.post('/logout', authMiddleware, userController.logout);

exports.userRouter = router;
