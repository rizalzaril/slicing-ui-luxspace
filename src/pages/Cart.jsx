import CartItems from "../components/layouts/cart/CartItem";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import BreadcrumbsItems from "../components/fragments/BreadCrumbsItem";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Cart() {
  return (
    <SpeedInsights>
      <>
        <Navbar />
        <BreadcrumbsItems />
        <CartItems />
        <Footer />
      </>
    </SpeedInsights>
  );
}
