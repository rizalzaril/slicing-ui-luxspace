import NavItem from "../elements/navItem";
import logoBar from "../../assets/images/logo.png";

const Navbar = () => {
  const linkItem =
    "text-slate-900 font-bold text-[18px]  hover:underline font-normal";

  return (
    <>
      <div className="p-0 z-10  bg-white w-full  items-center flex justify-between">
        <img src={logoBar} className="ml-28" alt="" />
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
        </ul>
      </div>
    </>
  );
};

export default Navbar;
