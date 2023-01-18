const Mongoose = require("mongoose");

const MoviesSchema = new Mongoose.Schema(
  {
    title: String,
    movies: [
      {
        movie: {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
        subTitle: {
          type: String,
        },
      },
    ],
    // movies:[
    //     {sub: String,
    //     subt: String,}
    // ]
  },
  { versionKey: false }
);
MoviesSchema.plugin(require("mongoose-autopopulate"));
module.exports = Mongoose.model("MoviesSchema", MoviesSchema);
