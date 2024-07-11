const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
});

// Virtual for patients's URL
PatientSchema.virtual("url").get(function () {
  return `/category/patient/${this._id}`;
});

// Export model
module.exports = mongoose.model("Patient", PatientSchema);
