const { timeStamp } = require('console');
const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: [true, "Please Enter Movie Name!"]
        },

        genre: {
            type: String,
            required: [true, "Please Enter Movie Genre!"]
        },

        rating:{
            type: Number,
            required: [true, "Please Enter Movie Rating!"]
        },

        persrec:{
            type: String,
            requried: false
        }
    },
    
    {
        timestamps: true,
    }
    
)


const Movies = mongoose.model("Movie", MovieSchema);
module.exports = Movies;