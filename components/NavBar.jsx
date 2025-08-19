import { Link, NavLink } from "react-router-dom";
import MenuImg from "../assets/icons/menu-wider.png";
import { useState } from "react";
import Logo from '../assets/img/Logo.png'

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <header className="sticky top-0 w-full page-frame z-50">
      <nav className="flex justify-between items-center">
        <img src={MenuImg} alt="" onClick={() => setVisible(true)} />
        <Link to={"/"}>
          <span className="text-3xl">IMovie</span>
        </Link>
      </nav>

      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden transition-all bg-[#000000e5] shadow-2xl rounded-md border ${
          visible ? "w-full md:w-[20%] h-screen" : "w-0 h-0"
        }`}
      >
        <div className="flex flex-col gap-10 pl-3">
          <div className="flex justify-between items-center py-4 px-2 cursor-pointer">
            <Link to={'/'}><img src={Logo} alt="logo" className="w-20 h-20" /></Link>
            <span onClick={() => setVisible(false)} className="side-text">
              Close
            </span>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>About</span>
          </NavLink>
          <NavLink
            to="/project"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Project</span>
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Skills</span>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
