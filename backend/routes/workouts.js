const express = require('express')
//const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

/*router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})*/
router.get('/', getWorkouts)

/*router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})*/
router.get('/:id', getWorkout)

/*router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout= await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }

})*/
router.post('/', createWorkout)

/*router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})*/
router.delete('/:id', deleteWorkout)

/*router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})*/
router.patch('/:id', updateWorkout)


module.exports = router