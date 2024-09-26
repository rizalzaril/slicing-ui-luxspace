import Slider from "../components/layouts/details/Slider";
import SameProduct from "../components/layouts/details/SameProduct";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import BreadcrumbsItems from "../components/fragments/BreadCrumbsItem";
import RegisterPage from "./Register";

const Details = () => {
  return (
    <div>
      <Navbar />
      <BreadcrumbsItems />
      <Slider />
      <SameProduct />
      <Footer />
    </div>
  );
};

export default Details;
