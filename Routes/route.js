const express =require('express');
const router= express.Router();
const{ getWorkout,addWorkout}= require('../controllers/workout')

router.get('/',getWorkout);
router.get('/',addWorkout);

module.exports = router;