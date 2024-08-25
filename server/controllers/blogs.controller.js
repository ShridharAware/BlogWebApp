const { blogsService } = require("../services");

const createBlog = async (req, res) => {
  try {
    res.status(201).json(await blogsService.createBlog(req, res));
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const getBlogs = async (req, res) => {
  try {
    const Blogs = await blogsService.getBlogs(req, res);
    res.status(200).json(Blogs);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
module.exports = { createBlog, getBlogs };
