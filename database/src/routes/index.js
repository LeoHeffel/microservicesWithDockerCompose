const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  let { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});
router.get("/:model/:id", validateModel, async (req, res) => {
  let { model, id } = req.params;
  const response = await store[model].get(id);
  if (response) return res.status(200).json(response);
  res.status(404).send({ message: "id not found" });
});

router.post("/:model", validateModel, async (req, res) => {

  let { model} = req.params;
  let data = req.body
  const response = await store[model].insert(data);
  if (response) return res.status(200).json(response);
  res.status(404).send({ message: "id not found" });
});
module.exports = router;
