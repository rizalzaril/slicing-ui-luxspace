import Header from "../components/layouts/Header";
import About from "../components/layouts/About";
import Category from "../components/layouts/Kategori";
import Footer from "../components/layouts/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const HomePage = () => {
  return (
    <SpeedInsights>
      <div>
        <Header />
        <About />
        <Category />
        <Footer />
      </div>
    </SpeedInsights>
  );
};

export default HomePage;
