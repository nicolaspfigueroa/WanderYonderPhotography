const { Router } = require('express');
const imageController = require('../controllers/imageController');

const router = Router();

router.get('/',  imageController.getImages);
router.post('/',  imageController.createImage);

exports.imageRouter = router;