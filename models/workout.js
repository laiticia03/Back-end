const  mongoose = require("mongoose");
const Schema= mongoose.Schema;

const workoutSchema= new Schema({
    title:{
         type:String,
         required:true
    },
    load:{
      type:Number,
      required:true
    },
    reps:{
      type:Number,
      require:true
    },
    
})

const Workout = mongoose.model('Workout',workoutSchema) 
module.exports = Workout;