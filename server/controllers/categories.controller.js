const { categoryService } = require("../services");

const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req, res);
    res.status(201).json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {};

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
