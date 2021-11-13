const Workout = require("../../models/workout.js");
const express = require("express");
const router = express.Router();




router.post("/api/workouts", ({ body }, res) => {
    try {
      Workout.create(body).then((workout) => {
        console.log(workout);
        res.json(workout);
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(404).json(err);
    }
  });
  
 
  router.get("/api/workouts", async (req, res) => {
    try {
     
  
      const workoutData = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration'
            },
          }
        }
      ])
      res.json(workoutData);
  
    } catch (err) {
      console.log(err);
      res.sendStatus(404).json(err);
    }
  });
  
  router.put("/api/workouts/:id", async ({ params, body }, res) => {
    try {
      const results = await Workout.findByIdAndUpdate(
        params.id,
        {
          $push: { exercises: body },
        },
        { new: true, runValidators: true }
      );
      res.json(results);
    } catch (err) {
      console.log(err);
      res.sendStatus(404).json(err);
    }
  });
 
  router.get("/api/workouts/range", async (req, res) => {
    try {
      const workoutData = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration'
            }
          }
        }
      ])
      .sort({_id: -1})
      .limit(7)
      res.json(workoutData);
    } catch (err) {
      console.log(err);
      res.sendStatus(404).json(err);
    }
  });
  
  router.post("/api/workouts/range", async (req, res) => {
    try {
      Workout.create({}).then((workout) => {
        res.json(workout);
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(404).json(err);
    }
  });
  
  module.exports = router;
  