import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Slider = () => {
  const { id } = useParams(); // Get id from parameters
  const [sliderData, setSliderData] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch product data from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setSliderData(data); // Set the slider data based on the fetched product
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchProduct();
  }, [id]); // Depend on id so it updates if it changes

  if (loading) {
    return (
      <div className="mt-24 flex justify-center gap-4 bg-white">
        {/* Loading skeletons */}
        <div className="flex flex-col items-start space-y-4">
          <Skeleton height={100} width={100} className="rounded-2xl" />
        </div>

        <Skeleton height={450} width={500} className="rounded-2xl" />

        <div className="ml-4 flex flex-col justify-start w-1/3 items-start">
          <Skeleton height={24} width={200} className="mb-2" />
          <Skeleton height={18} width={100} className="mb-2" />
          <Skeleton height={40} width={150} className="mt-4" />
          <hr className="border-[1px] w-full border-slate-200 mt-6" />
          <Skeleton height={18} width={250} className="mt-12" />
          <Skeleton count={3} height={15} className="mb-2" />
          <Skeleton height={30} width={100} className="mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24 flex justify-center gap-4 bg-white">
      <div className="flex flex-col items-start space-y-4">
        {/* Displaying only the main product image as a thumbnail */}
        <div className="w-[100px] h-[100px] border flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src={sliderData.image}
            alt="thumbnail"
            className={`w-full h-full object-contain rounded-2xl cursor-pointer`}
            onClick={() => setCurrentIndex(0)}
          />
        </div>
      </div>

      <div className="w-[500px] h-[450px] border flex items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={sliderData.image}
          className="w-[500px] h-[450px] rounded-2xl object-contain"
          alt={sliderData.title}
        />
      </div>

      <div className="ml-4 flex flex-col justify-start w-1/3 items-start">
        <h1 className="font-semibold text-[24px] text-slate-900">
          {sliderData.title} {/* Displaying the product title */}
        </h1>
        <p className="font-normal text-[18px] mt-1">
          IDR {sliderData.price} {/* Displaying the product price */}
        </p>
        <button
          className="bg-slate-950 text-white mt-4 py-2 px-4 rounded-[20px]"
          onClick={() => alert("OK")}
        >
          Add To Cart
        </button>
        <hr className="border-[1px] w-full border-slate-200 mt-6" />

        {/* Content paragraph with "Read More" functionality */}
        <div>
          <p className="mt-12 mb-1 text-slate-950 font-bold text-[18]">
            About the product :
          </p>
        </div>
        <div className="flex">
          <div className="mt-4 text-gray-700 ">
            <p className="mb-2">
              {sliderData.description}{" "}
              {/* Displaying the product description */}
            </p>

            {showMore && (
              <>
                <p className="mb-3">
                  Providing a subtle nod to the past, Jetty also provides a
                  perfect solution for the way we work today.
                </p>
                <p className="mb-3">
                  Providing a subtle nod to the past, Jetty also provides a
                  perfect solution for the way we work today.
                </p>
              </>
            )}

            <button
              onClick={() => setShowMore(!showMore)}
              className="text-white mt-2 bg-black focus:outline-none"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
