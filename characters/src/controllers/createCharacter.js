
const {response} = require('../utils');
const axios = require('axios')
module.exports = async(req,res)=>{
    const data = req.body
    const newCharacter = await axios.post(`http://database:8004/Character`,data)
    response(res,201, newCharacter.data)
}