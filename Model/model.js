const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/Lounchpad_app'
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connection...');
    }).catch((err) => {
        console.log(err);
    })

const userCollection = mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    company:{
        type:String,
        required:true
    },
    countery:{
        type:String,
        required:true
    },
    Avalilability:{
        type:String,
        required:true
    },
    Description:{
        type :String,
        required:true
    }
})


const Lounchpad_detail = mongoose.model('Lounchpad', userCollection)


module.exports = { Lounchpad_detail }