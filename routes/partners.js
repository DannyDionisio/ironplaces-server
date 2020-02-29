const express = require("express");
const router = express.Router();
const Partners = require("../models/partners-model");

/* Ironplaces route */
router.get("/places", (req, res, next) => {
  //obter places do mongo
  const filter = req.query.type;

  if(filter) {
    Partners.find({ type: filter })
    .then(allPartners => {
      res.json(allPartners);
    })
    .catch(err => {
      res.send("Error");
    })
  } else {
    Partners.find()
    
    .then(allPartners => {
      res.json(allPartners);
    })
    .catch(err => {
      res.send("Error");
    });
  }
});
  

/* Add Place route */
router.post("/addplace", (req, res, next) => {
  //gravar place no mongo
  const { name, type, address, coordinates, discount } = req.body;
  const newPlace = new Partners({ name, type, address, coordinates, discount });
  newPlace
    .save()
    .then(place => {
      res.send("Sucess");
    })
    .catch(err => {
      res.send("Error");
    });
});

/* Delete Place route */
router.post("/places/:id/delete", (req, res, next) => {
  //apagar place do mongo
  const id = req.params.id;
  console.log("id", id);
  Partners.findByIdAndDelete(id)
    .then(place => {
      res.send("apagado com sucesso");
    })
    .catch(err => {
      res.send("Error");
    });
});

module.exports = router;
