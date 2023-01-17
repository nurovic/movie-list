const MoviesDB = require("../models/MoviesModel");
const cloudinary = require("cloudinary");

class Movies {
  async index(req, res) {
    try {
      // const dataSchema = [
      //   {
      //     title: "Johneqeq",
      //     movies: [
      //       {
      //         sub: "000002eqwe0000",
      //         subt: "Deneme",
      //       },
      //       {
      //         sub: "111wqewqe111",
      //         subt: "Deneme111",
      //       },
      //       {
      //         sub: "22222",
      //         subt: "Deneme222",
      //       },
      //       {
      //         sub: "33333333",
      //         subt: "Deneme3333",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Mqweerteqeq",
      //     movies: [
      //       {
      //         sub: "mov",
      //         subt: "Don mbov",
      //       },
      //       {
      //         sub: "asdasd",
      //         subt: "asdadasd",
      //       },
      //       {
      //         sub: "sdadasda",
      //         subt: "asdadasd",
      //       },
      //       {
      //         sub: "2asdad",
      //         subt: "asdsd",
      //       },
      //     ],
      //   },
      //   {
      //     title: "wqrqwrqrcan",
      //     movies: [
      //       {
      //         sub: "modf2112312gdsfgdv",
      //         subt: "Dqweqweegfgon mbov",
      //       },
      //       {
      //         sub: "13adasdas",
      //         subt: "asdvfdgrthrqfadasd",
      //       },
      //       {
      //         sub: "sdadafgdsfgdsfgsda",
      //         subt: "asdadfgdsdasd",
      //       },
      //       {
      //         sub: "2asdadsfgfgdsfgdsgd",
      //         subt: "asdsdfsgdsgfsd",
      //       },
      //       {
      //         sub: "asdfgdsgfdsfasd",
      //         subt: "asgdsgdsfgdfsgdadasd",
      //       },
      //       {
      //         sub: "sdadagsdfgdssda",
      //         subt: "asdadfgsdfdasd",
      //       },
      //       {
      //         sub: "2asdsfgsdfgsdgdad",
      //         subt: "dsfgasdsd",
      //       },
      //     ],
      //   },
      // ];
      let newList = [];
      // for (let i = 0; i < a.length; i++) {
      //   let imagesLinks = [];
      //   for (let j = 0; j < movies.length; j++) {
      //     console.log(movies[j])
      //     // const result = await cloudinary.v2.uploader.upload(dataArray[i].img);
      //     // imagesLinks.push({
      //     //   public_id: result.public_id,
      //     //   url: result.secure_url,
      //     //   subTitle: dataArray[i].subTitle,
      //     // });
      //   }
      // }
      let dataSchema = req.body.quantity;
      console.log(dataSchema)
      let hey = [];
      dataSchema.forEach((mp) => {
        console.log(mp)
        // let fj = mp.movies.map((ds, i) => {
        //   const result =  cloudinary.v2.uploader.upload(ds.movie);
        //   return (ds = { public_id: result.public_id,  url: result.secure_url,  ds: ds.subTitle,});
        // });
        // mp.movies = fj;
        // hey.push(mp);
      });
      console.log(dataSchema);
      // hey.map(a => console.log(a.movies))
      // console.log(req.body.quantity)
      // a?.map(a => ( console.log(a)) )
      // const imgData = req.body.images
      // const subTitle = req.body.subTitle
      // console.log(imgData)

      //2
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

      // 1
      //   let dataArray = imgData?.map(function(item, index) {
      //     return {img: item, subTitle: subTitle[index]};
      // });

      // imgData.forEach((element, i) => {
      //   nameData.forEach((el,index ) => {
      //     console.log(element[i] === el[index])
      //   })
      // });

      //3
      //   let imagesLinks = []
      //   for (let i = 0; i < dataArray.length; i++) {
      //   const result = await cloudinary.v2.uploader.upload(dataArray[i].img);
      //     imagesLinks.push({
      //       public_id: result.public_id,
      //       url: result.secure_url,
      //       subTitle: dataArray[i].subTitle
      //     })
      // }

      // req.body.images = imagesLinks
      // const product = await MoviesDB.create(req.body);
      // res.status(201).json({
      //   success: true,
      //   product,
      // });
    } catch (error) {
      console.log("imageError:", error);
    }
  }
  async getAll(req, res) {
    try {
      const moviesAll = await MoviesDB.find();
      res.status(201).json({
        success: true,
        moviesAll,
      });
    } catch (error) {
      console.log("gellAll course", error);
    }
  }
  async indexa(req, res) {
    try {
      const a = [
        {
          title: "Johneqeq",
          movies: [
            {
              sub: "000002eqwe0000",
              subt: "Deneme",
            },
            {
              sub: "111wqewqe111",
              subt: "Deneme111",
            },
            {
              sub: "22222",
              subt: "Deneme222",
            },
            {
              sub: "33333333",
              subt: "Deneme3333",
            },
          ],
        },
        {
          title: "Mqweerteqeq",
          movies: [
            {
              sub: "mov",
              subt: "Don mbov",
            },
            {
              sub: "asdasd",
              subt: "asdadasd",
            },
            {
              sub: "sdadasda",
              subt: "asdadasd",
            },
            {
              sub: "2asdad",
              subt: "asdsd",
            },
          ],
        },
        {
          title: "wqrqwrqrcan",
          movies: [
            {
              sub: "modf2112312gdsfgdv",
              subt: "Dqweqweegfgon mbov",
            },
            {
              sub: "13adasdas",
              subt: "asdvfdgrthrqfadasd",
            },
            {
              sub: "sdadafgdsfgdsfgsda",
              subt: "asdadfgdsdasd",
            },
            {
              sub: "2asdadsfgfgdsfgdsgd",
              subt: "asdsdfsgdsgfsd",
            },
            {
              sub: "asdfgdsgfdsfasd",
              subt: "asgdsgdsfgdfsgdadasd",
            },
            {
              sub: "sdadagsdfgdssda",
              subt: "asdadfgsdfdasd",
            },
            {
              sub: "2asdsfgsdfgsdgdad",
              subt: "dsfgasdsd",
            },
          ],
        },
      ];

      const data = [];
      for (let i = 0; i < a.length; i++) {
        const list = a[i];
        const product = await MoviesDB.create(list);
        data.push(product._id);
      }

      res.status(201).json({
        success: true,
        id: data,
      });
    } catch (error) {
      console.log("imageError:", error);
    }
  }
}
module.exports = new Movies();
