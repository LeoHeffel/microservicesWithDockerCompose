const Film = require("../data");
const { response } = require("../utils");
const axios = require('axios')
module.exports = async (req, res) => {
  const peliculas = await axios.get(`http://database:8004/Film`)
  response(res, 200, peliculas.data);
};
