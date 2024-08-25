const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    validate: {
      validator: async (value) => {
        const category = await mongoose.model("categories").findById(value);
        return category !== null;
      },
      message: "Category must reference an existing Category from collection.",
    },
    required: true,
  },
  content: String,
});

const blogsModel = mongoose.model.blogs || mongoose.model("blogs", blogsSchema);

module.exports = blogsModel;
