const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')
//const Workout = require('../models/workoutModel')

const router = express.Router()

//GET all workouts
router.get('https://mern-stack-steel.vercel.app/', getWorkouts)
// router.get('/', (req, res) => {
//     res.json({ msg: 'GET all workouts' })
// })

//GET a single workout
router.get('https://mern-stack-steel.vercel.app/:id', getWorkout)
// router.get('/:id', (req, res) => {
//     res.json({ msg: 'GET a single workout' })
// })

//POST a new workout
router.post('https://mern-stack-steel.vercel.app/', createWorkout)
// router.post('/', async (req, res) => {
//     // const { title, load, reps } = req.body

//     // try {
//     //     const workout = await Workout.create({ title, load, reps })
//     //     res.status(200).json(workout)
//     // } catch (error) {
//     //     res.status(400).json({ error: error.message })
//     // }
//     //res.json({ msg: 'POST a new workout' })
// })

//DELETE a new workout
router.delete('https://mern-stack-steel.vercel.app/:id', deleteWorkout)
// router.delete('/:id', (req, res) => {
//     res.json({ msg: 'DELETE a new workout' })
// })
//UPDATE a new workout
router.patch('https://mern-stack-steel.vercel.app/:id', updateWorkout)
// router.patch('/:id', (req, res) => {
//     res.json({ msg: 'UPDATE a new workout' })
// })


module.exports = router