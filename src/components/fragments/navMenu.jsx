import NavItem from "../elements/navItem";

const NavMenu = () => {
  const linkClassName =
    " font-normal text-white text-[18px]  hover:underline hover:text-slate-900 ";

  return (
    <div className="absolute top-4   p-2 z-10 justify-center items-center flex text-center">
      <ul className="flex flex-wrap p-8 lg:gap-12 md:gap-8 sm:gap-5 justify-center text-center">
        <NavItem href="/login" className={linkClassName}>
          Showcase
        </NavItem>
        <NavItem href="/register" className={linkClassName}>
          Catalog
        </NavItem>
        <NavItem href="#projects" className={linkClassName}>
          Delivery
        </NavItem>
        <NavItem href="#contact" className={linkClassName}>
          Rewards
        </NavItem>
      </ul>
    </div>
  );
};

export default NavMenu;
