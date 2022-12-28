// const cloudinary = require("../scripts/utilis/cloudinary");
const MoviesDB = require('../model/MoviesModel')
const cloudinary = require('cloudinary');

class Movies {
  async index(req, res){
    try {
      let images = []
      if(typeof req.body.images === 'string') {
        images.push(req.body.images)
      }else {
        images = req.body.images
      }
    
      let imagesLinks = []
      
      for (let i = 0; i < images.length; i++) {
        // console.log("images", images)
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'products'
        });
        console.log("result,", result)
          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
            
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
