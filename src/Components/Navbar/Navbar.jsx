import "./Navbar.css";
import logo from "./../../assets/logo.png";
import menu_icon from "./../../assets/menu-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            What we offer
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Stock gallery
          </Link>
        </li>

        <li>
          <Link to="test" smooth={true} offset={-260} duration={500}>
            Reviews
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
