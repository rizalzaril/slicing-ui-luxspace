import companyImg1 from "../../assets/images/company1.png";
import companyImg2 from "../../assets/images/company2.png";
import companyImg3 from "../../assets/images/company3.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const cateHeader = "font-semibold text-[32px]";
  const imgCat = "w-60 rounded-[20px]";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the fetched products in state
        console.log(data); // Log the fetched data
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Ensure loading is false even if there's an error
      });
  }, []); // Empty array ensures the effect runs only once when the component mounts

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className=" bg-white">
        <div className="p-12 w-full text-center">
          <h1 className={cateHeader}>Just Arrived</h1>
          <h1 className={cateHeader}>This Summer For You</h1>
        </div>
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-0" // Reduced padding per item
        >
          {loading
            ? // Show skeletons while loading
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Skeleton height={300} width={300} className="rounded-2xl" />
                  <Skeleton width={200} className="mt-4" />
                  <Skeleton width={100} className="mt-1" />
                </div>
              ))
            : // Render the products once loading is done
              products.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="relative group p-0 w-[300px] h-[300px] bg-white justify-center overflow-hidden rounded-2xl flex flex-col items-center">
                    <img
                      src={item.image}
                      className={`w-full h-full object-contain rounded-2xl cursor-pointer transition-transform duration-300 ${imgCat} hover:scale-105 shadow-lg`}
                      alt={item.title}
                    />
                    <a
                      href={`/details/${item.id}`}
                      className="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-20 text-white rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <button className="bg-slate-900 text-white py-2 px-4 rounded-lg">
                        Details
                      </button>
                    </a>
                  </div>
                  <h1 className="mt-4 font-semibold text-[22px]">
                    {item.title.length > 20
                      ? `${item.title.slice(0, 20)}...`
                      : item.title}
                  </h1>

                  <p className="text-[18px] mt-1 font-medium text-slate-400 mb-12">
                    IDR {item.price}
                  </p>
                </div>
              ))}
        </Carousel>

        <div className="flex justify-center items-center mt-24 gap-12 mb-24">
          <img src={companyImg1} alt="" />
          <img src={companyImg2} alt="" />
          <img src={companyImg3} alt="" />
          <img src={companyImg1} alt="" />
        </div>
      </section>
      <hr />
    </>
  );
};

export default Category;
