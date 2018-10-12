const mongoose = require('mongoose')
// this will be are data aka
// our model

const monstersSchema = new mongoose.Schema[{
    name: {type: String, required: true},
    color: String,
    location: String,
    }];

    module.exports = mongoose.model('Monsters', monstersSchema); //what the model is going to be called, and what the collection is going to be called
    //mongo creates 