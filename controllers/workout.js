const { json } = require('express');
const Workout = require('../models/workout')

function getWorkout(req, res){
    Workout.find()
    .then(Workouts => res.json('Workouts'))
    .catch(err => 
        res.status(400).json(err)
        )
    
}

function addWorkout(req ,res){
 const newWorkout =new Workout(req.body);
 newWorkout.save()
 .then(newWorkout=> res.json('add workout'))
 .catch(err=> 
    res.status(400).json(err)
    )
}

module.exports= {
    getWorkout,
    addWorkout
}
