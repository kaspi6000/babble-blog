const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true, lowercase: true }, // email
  pw: String,
  status: Number // 0: 회원, 1: 구글, 2: 깃헙, 3: 페북 등..
});

module.exports = mongoose.model("users", userSchema);
