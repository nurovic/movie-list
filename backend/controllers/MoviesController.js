const MoviesDB = require('../models/MoviesModel')
const cloudinary = require('cloudinary');

class Movies {
  async indexs(req, res){
    try {
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
  async getAll(req, res){
    try {
      const moviesAll = await MoviesDB.find()
      res.status(201).json({
        success: true,
        moviesAll
      });
    } catch (error) {
      console.log("gellAll course", error)
    }
  }
  async index(req, res){
    try {
      const a =
       [
          {
            title: "John",
            movies: [
              {
                sub: "000000000",
                subt: "Deneme"
              },
              {
                sub: "111111",
                subt: "Deneme111"
              },
              {
                sub: "22222",
                subt: "Deneme222"
              },
              {
                sub: "33333333",
                subt: "Deneme3333"
              },

            ]
          },
          {
            title: "Mert",
            movies: [
              {
                sub: "mov",
                subt: "Don mbov"
              },
              {
                sub: "asdasd",
                subt: "asdadasd"
              },
              {
                sub: "sdadasda",
                subt: "asdadasd"
              },
              {
                sub: "2asdad",
                subt: "asdsd"
              },

            ]
          },
          {
            title: "can",
            movies: [
              {
                sub: "modfgdsfgdv",
                subt: "Degfgon mbov"
              },
              {
                sub: "asdadasdas",
                subt: "asdvfdgrthrqfadasd"
              },
              {
                sub: "sdadafgdsfgdsfgsda",
                subt: "asdadfgdsdasd"
              },
              {
                sub: "2asdadsfgfgdsfgdsgd",
                subt: "asdsdfsgdsgfsd"
              },
              {
                sub: "asdfgdsgfdsfasd",
                subt: "asgdsgdsfgdfsgdadasd"
              },
              {
                sub: "sdadagsdfgdssda",
                subt: "asdadfgsdfdasd"
              },
              {
                sub: "2asdsfgsdfgsdgdad",
                subt: "dsfgasdsd"
              },

            ]
          },
        ]
        const data = []
        for(let i = 0; i < a.length; i++) {
          const list = a[i]
          const product = await MoviesDB.create(list);
          data.push(product._id)
        }
    
      res.status(201).json({
        success: true,
        id: data,
      });
    } catch (error) {
      console.log("imageError:", error)
    }
  }
}
module.exports = new Movies();