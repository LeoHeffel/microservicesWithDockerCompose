
const { response } = require("../utils");
const axios = require('axios')
module.exports = async (req, res) => {
  const {id}= req.params
  const peliculas = await axios.get(`http://database:8004/Film/${id}`)
  response(res, 200, peliculas.data);
};
