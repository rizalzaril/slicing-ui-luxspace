import NavItem from "../elements/navItem";
import logoBar from "../../assets/images/logo.png";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useEffect } from "react";

import cartIcon from "../../assets/images/cart.png";

const Navbar = () => {
  const linkItem =
    "text-slate-900 font-bold text-[18px]  hover:underline font-normal";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false)), 1000;
  }, []);

  if (loading) {
    return (
      <div className="p-0 z-10 items-center flex justify-between">
        <Skeleton height={50} width={100} className="mt-4 ml-28" />
      </div>
    );
  }

  return (
    <>
      <div className="p-0 z-10 fixed top-0   bg-white w-full  items-center flex justify-between">
        <a href="/">
          <img src={logoBar} className="ml-28" alt="" />
        </a>
        <ul className="flex flex-wrap p-8 lg:gap-8 md:gap-8 mr-24 sm:gap-5 justify-center text-center">
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
          <NavItem href="/cart" className={linkItem}>
            <img src={cartIcon} alt="" />
          </NavItem>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
