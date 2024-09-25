import NavItem from "../elements/navItem";
import cartIcon from "../../assets/images/cart.png";
const NavMenu = () => {
  const linkClassName =
    " font-normal text-white text-[18px]  hover:underline hover:text-slate-900 ";

  return (
    <div className="absolute top-4   p-2 z-10 justify-center items-center flex text-center">
      <ul className="flex flex-wrap p-8 lg:gap-12 md:gap-8 sm:gap-5 justify-center text-center">
        <NavItem href="/" className={linkClassName}>
          Showcase
        </NavItem>
        <NavItem href="/catalog" className={linkClassName}>
          Catalog
        </NavItem>
        <NavItem href="/delivery" className={linkClassName}>
          Delivery
        </NavItem>
        <NavItem href="/rewards" className={linkClassName}>
          Rewards
        </NavItem>
        <NavItem href="/cart" className={linkClassName}>
          <img src={cartIcon} alt="" />
        </NavItem>
      </ul>
    </div>
  );
};

export default NavMenu;
