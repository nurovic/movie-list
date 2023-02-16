const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    password: {
      type: String,
      required: [true, "Please add an password"],
    },
  },
  { versionKey: false }
);

module.exports = Mongoose.model("User", UserSchema);
