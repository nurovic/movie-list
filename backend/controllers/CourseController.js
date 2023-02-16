const CourseDB = require('../modelS/CourseCreateModel')

class Course {

  async getAll(req, res){
    try {
      const courseAll = await CourseDB.find()
      res.status(201).json({
        success: true,
        courseAll
      });
    } catch (error) {
      console.log("gellAll course", error)
    }
  }

  async create(req, res){
    try {
      console.log(JSON.parse(req.body.quantity))
      // const a = await CourseDB.create(req.body);

      res.status(201).json({
        success: true,
        
      });
        } catch (error) {
        console.log("Error Course create", error)
    }
  }

}
module.exports = new Course();