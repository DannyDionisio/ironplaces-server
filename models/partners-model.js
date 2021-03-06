const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Schema(
  {
    name: String,
    type: String,
    address: String,
    latitude: String,
    longitude: String,
    discount: String
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);
let Partners = mongoose.model("Partners", partnerSchema);

module.exports = Partners;
