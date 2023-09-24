
const {response} = require('../utils');
const axios = require('axios')
module.exports = async(req,res)=>{
    const data = req.body
    const newPlanet = await axios.post(`http://database:8004/Planet`,data)
    response(res,201, newPlanet.data)
}