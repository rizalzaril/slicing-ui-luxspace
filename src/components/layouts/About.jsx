import gambar1 from "../../assets/images/gambar1.png";
import gambar2 from "../../assets/images/item5.png";
import gambar3 from "../../assets/images/gambar2.png";

const About = () => {
  const aboutHeader = "font-semibold text-[32px] text-slate-950";
  const aboutImg =
    "rounded-[25px] transform transition duration-300 hover:scale-105";

  return (
    <div>
      <section className="w-full p-10 bg-[#F9F9F9]">
        <div className="flex mt-12 gap-12 justify-center items-start ">
          {/* Left column with header and images */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <h1 className={aboutHeader}>Browse The Room</h1>
              <h1 className={aboutHeader}>That We Designed For You</h1>
            </div>
            <div>
              <div className="relative">
                <img
                  className={`${aboutImg} mb-6 h-[180px] w-full`}
                  src={gambar1}
                  alt=""
                />
                <div className="absolute z-10 top-12 ml-64">
                  <h1 className="text-[22px] font-medium text-slate-950">
                    Living Room
                  </h1>
                  <p className="text-slate-900">1.000 items</p>
                </div>
              </div>
              <div className="relative">
                <img
                  className={`${aboutImg} mb-6 h-[180px] w-full`}
                  src={gambar3}
                  alt=""
                />
                <div className="absolute z-10 top-12 ml-64">
                  <h1 className="text-[22px] font-medium text-slate-950">
                    Children Room
                  </h1>
                  <p className="text-slate-900">1.000 items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with matching height */}
          <div className="mt-24">
            <img
              src={gambar2}
              className={`${aboutImg} h-[372px] w-full`}
              alt=""
            />
          </div>
          <div className="mt-24">
            <img
              src={gambar2}
              className={`${aboutImg} h-[372px] w-full`}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
