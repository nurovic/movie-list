const Mongoose = require("mongoose")

const CourseSchema = new Mongoose.Schema(
        {
            name: String,
            movies: [
                {
                    type: Mongoose.Schema.Types.ObjectId,
                    ref: 'MoviesSchema',
                    autopopulate: { maxDepth: 2 }
                }
            ]
        },
{versionKey:false}
)
CourseSchema.plugin(require('mongoose-autopopulate'))
module.exports = Mongoose.model("CourseCreate", CourseSchema);