const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Shcema ({
  name: String,
  type: String,
  adress: String,
  coordenates: String,
  descount: String,
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});
let Partners = mongoose.model("Partners", partnerSchema);

module.exports = Partners;
