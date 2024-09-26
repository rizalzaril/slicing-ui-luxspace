import CartItems from "../components/layouts/cart/CartItem";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import BreadcrumbsItems from "../components/fragments/BreadCrumbsItem";

export default function Cart() {
  return (
    <>
      <Navbar />
      <BreadcrumbsItems />
      <CartItems />
      <Footer />
    </>
  );
}
