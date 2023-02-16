const { generateToken } = require("../utilits/helper");
const UserDB = require("../models/UserModel");
const bcrypt = require("bcryptjs");

class User {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({message: "Please add all fields"})
      }
      const userExists = await UserDB.findOne({ email });
      
      if (userExists) {
        res.status(400).json({message: "User already exists"})
      }
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const user = await UserDB.create({
        name,
        email,
        password: hashedPassword,
      });

      if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
       throw new Error("Invalid user data");
      }
    } catch (error) {
      console.log("Create User Error:", error)
    }
  }

  async login(req, res){
    const {email, password} = req.body

    const user = await UserDB.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    }
    else {
      res.status(400)
      console.log("login error")
    }
  }

  getMe (req, res){
   res.status(200).json(req.user) 
  }
}
module.exports = new User();
