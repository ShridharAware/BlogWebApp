import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";
import CreateCategoryForm from "./components/CreateCategoryForm";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:id" element={<BlogCard />} />
          <Route path="/create-category" element={<CreateCategoryForm />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
