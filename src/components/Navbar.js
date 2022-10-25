import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-20 fixed bg-white p-10 z-10">
      <div className="float-left">
        <p>Logo</p>
      </div>
      <nav className="float-right">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="projects" className="nav-link">
          Projects
        </Link>
        <Link to="about-me" className="nav-link">
          About Me
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
