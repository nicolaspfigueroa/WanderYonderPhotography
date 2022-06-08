const Image = require('../models/imageModel');


exports.getImages = async function (req, res) {
  try {
    const images = await Image.find();
    return res.status(200).send({ res: images, error: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: 'Internal Server Error!', error: true });
  }
};


exports.createImage = async function (req, res) {
  try {

    const { title, url } = req.body;

    const newImage = new Image({ title, url });
    await newImage.save();

    return res.status(201).send({ res: newEvent, error: false });
  } catch (error) {
    console.log(error);
  }
};


