// * As a user, I want to be able to view create and 
//  track daily workouts. I want to be able to log multiple exercises in a workout 
// on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the 
// exercise is a cardio exercise, I should be able to track my distance traveled.
 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now, 
    },
    exercises: [
    {
        {
            type: String,
            trim: true,
            enum: ["cardio" "lifting"],
            required: [true, "workout type is required"],
        },
     name: {
            type: String,
            trim: true,
            required: ["Name of exerciseis required"],
        },
        duration: {
            type: Number,
            required: [true, "duration is required"],
        }, 
        distance: {
            type: Number,
        //    not required
        },
        weight: {
            type: Number,
            

        }
        sets: {
            type: Number,
        },
        reps: {
            type: Number
        }
        
     }
    ]

    
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;