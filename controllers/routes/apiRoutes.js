const Workout = require("../../models/workout");
const express = require("express");
const router = express.Router();
const { get } = require("http");
// create workout
router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// find workout
router.get("/", (req, res) => {
    db.Workout.find().sort({ day: -1 }).limit(1);
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch(err => {
            res.json(err);
        });
});
// add workout
router.put("/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } }, 
        { new: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
});

router.get("/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                },
                totalWeight: {
                    $sum: "$exercises.weight"
                }
            }
        }
    ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;

