import NavItem from "../elements/navItem";
import logoBar from "../../assets/images/logo.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import cartIcon from "../../assets/images/cart.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close button

const Navbar = () => {
  const linkItem =
    "text-slate-900 font-bold text-[18px] hover:underline font-normal";

  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu toggle

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Function to toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (loading) {
    return (
      <div className="p-0 z-10 items-center flex justify-between">
        <Skeleton height={50} width={100} className="mt-4 ml-28" />
      </div>
    );
  }

  return (
    <>
      <div className="p-0 bg-white w-full items-center flex justify-between fixed top-0 left-0 z-20">
        <a href="/">
          <img src={logoBar} className="ml-6 sm:ml-28" alt="" />
        </a>

        <div className="flex items-center">
          {/* Hamburger Icon for Mobile */}
          <button
            className="text-slate-900 text-3xl md:hidden p-4 mr-6"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Cart Menu on mobile */}
          <NavItem href="/cart" className="mr-4 md:hidden">
            <img src={cartIcon} alt="" />
          </NavItem>
        </div>

        {/* Navbar Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:flex p-8 gap-8 md:gap-8 mr-6 sm:mr-24 justify-center text-center absolute md:static top-16 left-0 bg-white w-full md:w-auto md:bg-transparent`}
        >
          <NavItem href="/login" className={linkItem}>
            Showcase
          </NavItem>

          <NavItem href="/register" className={linkItem}>
            Catalog
          </NavItem>
          <NavItem href="#projects" className={linkItem}>
            Delivery
          </NavItem>
          <NavItem href="#contact" className={linkItem}>
            Rewards
          </NavItem>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
