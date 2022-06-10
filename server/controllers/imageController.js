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

    return res.status(201).send({ error: false });
  } catch (error) {
    console.log(error);
  }
};

//function to delete topic routed through api/topics/:id
exports.deleteImage = async function (req, res) {
  try {
    //destructure the message id from req.params
    const { id } = req.params;
    //delete the topic associated with the id
    await Image.deleteOne({ _id: id });
    //return completion status message
    return res.status(200).send({
      res: `Image with id: ${id} deleted successfully!`,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
}

exports.getImage = async function (req, res) {
  try {
    //destructure the message id from req.params
    const { id } = req.params;
    //delete the topic associated with the id
    const image = await Image.findOne({ _id: id });
    //return completion status message
    return res.status(200).send({
      res: image,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
}

exports.changeTitle = async function (req, res) {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedImage = await Image.findOneAndUpdate(
      { _id: id },
      { title: title },
      { new: true }
    );
    return res.status(200).send( {res: updatedImage, error: false} );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
}


