const MoviesDB = require('../model/MoviesModel')
const cloudinary = require('cloudinary');

class Movies {
  async index(req, res){
    try {
      let images = []
      if(typeof req.body.images === 'string') {
        images.push({img: req.body.images, name: req.body.name})

      }else {
        images = req.body.images
      }

      let imagesLinks = []
      console.log("sadasd", req.body)
      console.log(" IMAGE", images)
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i].img);
          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
            nameVideo: images[i].name
          })
      }
      req.body.images = imagesLinks
      const product = await MoviesDB.create(req.body);
      res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      console.log("imageError:", error)
    }
  }

}
module.exports = new Movies();