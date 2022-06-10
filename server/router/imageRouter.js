const { Router } = require('express');
const imageController = require('../controllers/imageController');

const router = Router();

router.get('/',  imageController.getImages);
router.post('/',  imageController.createImage);
router.delete("/:id", imageController.deleteImage);

exports.imageRouter = router;