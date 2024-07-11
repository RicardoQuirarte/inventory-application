const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  mesotipo: {
    type: String,
    required: true,
    enum: ["Ectomorfo", "Mesomorfo", "Endomorfo"],
    default: "Ectomorfo",
  },
  description: { type: String, required: true },
});

// Virtual for author's URL
CategorySchema.virtual("url").get(function () {
  return `/category/${this._id}`;
});

// Export model
module.exports = mongoose.model("Category", CategorySchema);
