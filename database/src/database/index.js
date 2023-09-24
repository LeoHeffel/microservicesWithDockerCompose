const mongoose = require('mongoose');
const {MONGO_URI} = require('../config/envs')

console.log({MONGO_URI})
const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model('Character',require('./schemas/characterSchema'))
const Film = conn.model('Film',require('./schemas/filmSchema'))
const Planet = conn.model('Planet',require('./schemas/planetSchema'));


/* 
Character.find()
.populate("films",["_id", "title"])
.then(res => console.log(res[0])) */

module.exports={
    Character,
    Film,
    Planet
}