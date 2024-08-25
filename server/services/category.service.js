const { Categories } = require("../models");

const createCategory = async (req, res) => {
  try {
    const { image, category, description } = req.body;
    const categoryData = new Categories({
      category,
      slug: category.toLowerCase(),
      description,
      image,
    });
    await categoryData.save();
    return categoryData;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const getCategories = async () => {
  return await Categories.find();
};
const updateCategory = async () => {};
const deleteCategory = async () => {};
module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
