const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const holdingSchema = new Schema({
  ticker: {type: String},
  quantity: {type: Number}
});


const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;
