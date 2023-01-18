const MoviesDB = require("../models/MoviesModel");
const cloudinary = require("cloudinary");

class Movies {
  async index(req, res) {
    // try {
      let dataSchema =  JSON.parse(req.body.quantity)
      dataSchema.forEach(async (mp) => {
        let mapMov = await Promise.all(mp.movies.map(async (ds, i) => {
           const dad = await cloudinary.v2.uploader.upload(ds.movie)
           .then((res) => {
             let src = {
               public_id: "",
               url: "",
              //  subTitle: ds.subTitle,
             };
             src.public_id = res.public_id, src.url = res.secure_url
             ds.movie = src
             return mp
           })
           .catch((err) => (console.log("ERRRRR", err)) );
          //  console.log("DAAAAAADé", dad)
          //  dad?.movies?.map(a => console.log("MOVEIES",a))
           return dad
        }))
        return  mapMov
        
      })
      // res.status(201).send(ada)

      console.log("ADA", dataSchema)

      // dataSchema?.map(as => console.log("MAP-aS", as))
    // } catch (error) {
    //   console.log("imageError:", error);
    // }
  }
  indexd(req, res) {
    try {
      let dataSchema =  JSON.parse(req.body.quantity)
      dataSchema.forEach((mp) => {
        let mapMov = mp.movies.map( (ds, i) => {
          const result = []
          //  return (ds = { public_id: 2,  url: 34,  ds: ds.subTitle,});
          const res = cloudinary.uploader.upload(ds.movie)
          .then((dtb) => {
            let src = {
              public_id : "",
              url: "",
              subTitle : ds.subTitle
            }
            src.public_id = dtb.public_id,
            src.url = dtb.secure_url
            ds = src
            return ds
            }
            )
            console.log("RES", res)
          // return (ds = { public_id: result.public_id,  url: result.secure_url,  ds: ds.subTitle,});
        })
        mp.movies = mapMov;
        console.log(dataSchema)
        dataSchema?.map(ok => console.log(ok))

      });
    } catch (error) {
      console.log("imageError:", error);
    }
  }
  async indexg(req, res) {
    try {
      let dataSchema =  JSON.parse(req.body.quantity)
      let hey = [];
      dataSchema.forEach((mp) => {
        let h = []
        let fj = mp.movies.map((ds, i) => {
          cloudinary.v2.uploader.upload(ds.movie)
          .then((dtb) => {
            let src = {
              public_id : "",
              url: "",
              ds : ds.subTitle
            }
            src.public_id = dtb.public_id,
            src.url = dtb.secure_url
            return src
          }).then((da) => (
            h.push(da)
          ))
          // return (ds = { public_id: result.public_id,  url: result.secure_url,  ds: ds.subTitle,});
        });
        console.log(h )
        mp.movies = fj;
        hey.push(mp);
      });
      dataSchema.map((a) =>(console.log(a.movie)))
    } catch (error) {
      console.log("imageError:", error);
    }
  }
  async indexö(req, res) {
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
      let dataSchema =  JSON.parse(req.body.quantity)
      let hey = [];
      dataSchema.forEach((mp) => {
        let fj = mp.movies.map(async (ds, i) => {
          const result = await cloudinary.v2.uploader.upload(ds.movie);
          console.log(result)
          return (ds = { public_id: result.public_id,  url: result.secure_url,  ds: ds.subTitle,});
        });
        mp.movies = fj;
        hey.push(mp);
      });
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
