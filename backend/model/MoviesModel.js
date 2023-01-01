const Mongoose = require("mongoose")

const MoviesSchema = new Mongoose.Schema(
        {
            title: String,
            images: [
                {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    },
                    subTitle: {
                        type: String,
                    },
                }
            ]
        },
{versionKey:false}
)
// LevelSchema.plugin(require('mongoose-autopopulate'))
module.exports =  Mongoose.model("MoviesSchema", MoviesSchema)