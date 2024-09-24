import bangku1 from "../../../assets/images/bangku1.png";
import bangku2 from "../../../assets/images/bangku2.png";
import bangku3 from "../../../assets/images/bangku3.png";
import bangku4 from "../../../assets/images/bangku4.png";

const SameProduct = () => {
  const data = [
    {
      id: 1,
      name: "Bangku 1",
      price: "1000.000",
      img: bangku1,
    },
    {
      id: 2,
      name: "Bangku 2",
      price: "750.000",
      img: bangku2,
    },
    {
      id: 3,
      name: "Bangku 3",
      price: "800.000",
      img: bangku3,
    },
    {
      id: 4,
      name: "Bangku 4",
      price: "500.000",
      img: bangku4,
    },
  ];

  const aboutHeader = "font-semibold text-[32px]";
  //   const aboutImg =
  //     "rounded-[25px] transform transition duration-300 hover:scale-105";
  return (
    <div className="flex mt-12 gap-12 justify-center items-start  bg-[#F9F9F9]">
      {/* Left column with header and images */}
      <div className="flex flex-col items-start py-24">
        <div className="mb-6">
          <h1 className={aboutHeader}>Complete Your Room</h1>
          <h1 className={aboutHeader}>With What We Designed </h1>
        </div>

        <div className="flex justify-center gap-6">
          {data.map((item) => (
            <div className="w-[250px] h-[300px] flex items-center justify-center bg-white overflow-hidden rounded-2xl border">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="w-[200px] h-[200px] object-cover rounded-2xl cursor-pointer"
                />

                <div className="mt-2">
                  <p className="font-medium text-[20px]">{item.name}</p>
                  <p className="text-[16px]">IDR {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SameProduct;
