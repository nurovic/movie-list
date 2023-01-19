const MoviesDB = require("../models/MoviesModel");
const cloudinary = require("cloudinary");

class Movies {

  async index(req, res) {
    try {
    const dataSchema =  JSON.parse(req.body.quantity);
    const updatedDataSchema = await Promise.all(dataSchema?.map(async (mp) => {
      mp.movies = await Promise.all(mp.movies.map(async (ds) => {
          const dad = await cloudinary.v2.uploader.upload(ds.movie)
              .then((res) => {
                  let src = { public_id: "", url: ""};
                  (src.public_id = res.public_id), (src.url = res.secure_url);
                  ds.movie = src;
                  return ds;
              })
              .catch((err) => console.log("ERRRRR", err));
          return dad;
      }));
      return mp;
  }));

    const data = [];
    for (let i = 0; i < updatedDataSchema.length; i++) {
      const list = updatedDataSchema[i];
      const product = await MoviesDB.create(list);
      data.push(product._id);
    }
    console.log(data)
    res.status(201).json({
      success: true,
      id: data,
    });

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
