import catImg1 from "../../assets/images/item1.png";
import catImg2 from "../../assets/images/item4.png";
import catImg3 from "../../assets/images/item3.png";

import companyImg1 from "../../assets/images/company1.png";
import companyImg2 from "../../assets/images/company2.png";
import companyImg3 from "../../assets/images/company3.png";

const data = [
  {
    title: "Jam Tangan",
    description: "This is a swatch",
    price: "100.000",
    image: catImg1,
  },
  {
    title: "Note Book Sidu",
    description: "This is a cat",
    price: "25.000",
    image: catImg2,
  },
  {
    title: "Kursi Santai",
    description: "This is a cat",
    price: "350.000",
    image: catImg3,
  },
];

const Category = () => {
  const cateHeader = "font-semibold text-[32px]";
  const imgCat = "w-60 rounded-[20px]";
  return (
    <>
      <section className="mb-24">
        <div className="p-12 w-full text-center">
          <h1 className={cateHeader}>Just Arrived</h1>
          <h1 className={cateHeader}>This Summer For You</h1>
        </div>

        <div className="flex justify-center gap-12 items-center p-4">
          {data.map((item, index) => (
            <div>
              <div key={index} className="relative group">
                <img
                  src={item.image}
                  className={`transition-transform duration-300 ${imgCat} hover:scale-105 shadow-lg rounded-lg`}
                  alt=""
                />
                <a
                  href="/login"
                  className="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-20 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="bg-slate-900 text-white">Details</button>
                </a>
              </div>
              <h1 className="mt-4 font-semibold text-[22px]">{item.title}</h1>
              <p className="text-[18px] mt-1 font-medium text-slate-400">
                IDR {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-24 gap-12">
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
