const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  holdings: [{ type: Schema.Types.ObjectId, ref: 'Holding' }]
});




const User = mongoose.model("User", userSchema);

module.exports = User;
