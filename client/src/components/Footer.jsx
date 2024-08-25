import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; 2024 Copyright :
          <Link className="text-secondary text-decoration-none" to="/">
            BlogWEB
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
