const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  Uname: {
    type: String,
    required: true,
  },
  Uid: {
    type: String,
    required: true,
    unique: true,
  },
});

universitySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

universitySchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("UniversityModel", universitySchema);
