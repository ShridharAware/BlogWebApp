import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link to="/" className="navbar-brand mx-4">
          BlogWEB
        </Link>
        <ul
          className="navbar-nav navbar-items-right"
          style={{ marginLeft: "60%" }}
        >
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
