const MoviesDB = require('../model/MoviesModel')
const cloudinary = require('cloudinary');

class Movies {
  async index(req, res){
    try {
      // if(typeof req.body.images === 'string') {
        //   images.push({img:req.body.images, name:req.body.name})
        // }else {
          //   images = req.body.images
          // }
          const imgData = req.body.images
          const subTitle = req.body.subTitle
          console.log(imgData)
      //     let dataArray = []
      // for (let i = 0; i < imgData.length; i++) {
      //   for (let j = 0; j < nameData.length; j++) {
      //     console.log("aaaaaaaaa", imgData[i] = nameData[j])
      //     if(imgData[i] = nameData[j]){
      //       console.log("kahsd")
      //       dataArray.push({ img: imgData[i], name: nameData[j] });
      //     }else {
      //       console.log("No")
      //     }
      //   }
      // }
      let dataArray = imgData?.map(function(item, index) {
        return {img: item, subTitle: subTitle[index]};
    });
      console.log(dataArray)
      // imgData.forEach((element, i) => {
      //   nameData.forEach((el,index ) => {
      //     console.log(element[i] === el[index])
      //   })
      // });
        let imagesLinks = []
        for (let i = 0; i < dataArray.length; i++) {
        const result = await cloudinary.v2.uploader.upload(dataArray[i].img);
          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
            subTitle: dataArray[i].subTitle
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