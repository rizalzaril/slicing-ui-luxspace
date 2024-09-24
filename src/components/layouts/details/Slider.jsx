import { useState } from "react";
import thumb1 from "../../../assets/images/thumb1.png";
import thumb2 from "../../../assets/images/thumb2.png";

const Slider = () => {
  const imgs = [
    {
      id: 0,
      imgSlider: thumb1,
    },
    {
      id: 1,
      imgSlider: thumb2,
    },
    {
      id: 2,
      imgSlider: thumb1,
    },
    {
      id: 3,
      imgSlider: thumb2,
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handlerSlider = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="mt-24 flex justify-center  gap-4 bg-white">
        <div className="flex flex-col items-start space-y-4">
          {imgs.map((data) => (
            <div
              key={data.id}
              className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-2xl"
            >
              <img
                src={data.imgSlider}
                onClick={() => handlerSlider(data.id)}
                alt="img"
                className={`w-full h-full object-cover rounded-2xl cursor-pointer ${
                  sliderData.id === data.id
                    ? "border border-slate-200"
                    : "border-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="w-[500px] h-[450px] flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src={sliderData.imgSlider}
            className="w-[500px] h-[450px] rounded-2xl object-cover"
            alt=""
          />
        </div>

        <div className="ml-4 flex flex-col justify-start w-1/3 items-start">
          <h1 className="font-semibold text-[24px] text-slate-900">
            Chair Thatty
          </h1>
          <p className="font-normal text-[18px] mt-1">IDR 500.000</p>
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
                Tailored to a level of perfection synonymous with that of a
                Savile Row suit and with understated quality in the detail,
                Jetty has been influenced by timeless 1950s style.
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
                onClick={toggleShowMore}
                className="text-white mt-2 bg-black focus:outline-none"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
