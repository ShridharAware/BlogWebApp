const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

const categoryModel =
  mongoose.model.categories || mongoose.model("categories", categorySchema);

module.exports = categoryModel;
