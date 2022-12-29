// const cloudinary = require("../scripts/utilis/cloudinary");
const MoviesDB = require('../model/MoviesModel')
const cloudinary = require('cloudinary');

class Movies {
  async movieCreate(req, res){
    try {
      const result = await cloudinary.v2.uploader.upload(req.body.images, {
        folder: 'avatar',
      })
      const { name } = req.body;
      const user = await MoviesDB.create({
        name,
          public_id: result.public_id,
          url: result.secure_url,
      });
      res.send(user)
    } catch (error) {
      console.log("imageError:", error)
    }
  }

}
module.exports = new Movies();
