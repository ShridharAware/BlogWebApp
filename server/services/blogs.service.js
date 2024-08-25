const { Blogs } = require("../models");
const createBlog = async (req, res) => {
  try {
    const blog = new Blogs(req.body);
    await blog.save();
    return blog;
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    return await Blogs.find()
      .populate({
        path: "category",
        select: "category",
      })
      .exec();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateBlog = async (req, res) => {};

const deleteBlog = async (req, res) => {};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
