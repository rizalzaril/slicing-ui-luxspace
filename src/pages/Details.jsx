import Slider from "../components/layouts/details/Slider";
import SameProduct from "../components/layouts/details/SameProduct";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import BreadcrumbsItems from "../components/fragments/BreadCrumbsItem";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Details = () => {
  return (
    <SpeedInsights>
      <div>
        <Navbar />
        <BreadcrumbsItems />
        <Slider />
        <SameProduct />
        <Footer />
      </div>
    </SpeedInsights>
  );
};

export default Details;
