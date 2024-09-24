import { useTypewriter, Cursor } from "react-simple-typewriter";
import banner from "../../assets/images/banner.png";
import NavMenu from "../fragments/navMenu";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  const [text] = useTypewriter({
    words: [" You've Dreaming "],
    loop: true,
  });

  return (
    <div>
      <section className="flex flex-wrap">
        {/* Left section */}
        <div className="w-full sm:w-1/2 md:w-2/4 p-8  bg-white   justify-center relative sm:static sm:text-left sm:block hidden text-center">
          {/* Logo */}
          <img
            src={Logo}
            alt=""
            className="absolute top-0 p-0 ml-8 sm:static sm:top-auto"
          />

          {/* Text and heading */}
          <div className="lg:mt-60 sm:mt-16 md:mt-26 flex flex-col justify-center items-center">
            <h1 className=" font-bold sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              The Room
            </h1>
            <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mt-2 mb-2">
              <Cursor />
              {text}
            </h1>

            <p className="text-lg sm:text-[14px] text-center text-slate-900 md:text-[18px] py-4 lg:text-[24px]  ">
              Kami menyediakan furniture berkelas yang membuat ruangan terasa
              homey
            </p>
            <button className="w-[180px] border-[none] mt-6 hover:bg-slate-700 font-bold text-white bg-slate-900 rounded-[12rem]">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right section with banner */}
        <div className="w-full sm:w-1/2 md:w-2/4 p-0 relative flex items-center justify-center">
          <img className="w-full h-auto object-cover " src={banner} alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Move the typed text to center on small screens */}
          <div className="absolute flex flex-col items-center justify-center text-center text-white px-4 sm:hidden">
            <p className="text-lg mb-4">
              Selamat datang di portofolio saya! Saya adalah seorang pengembang
              web front end yang berpengalaman dalam menciptakan aplikasi yang
              responsif dan menarik.
            </p>
            <h1 className="text-4xl font-bold">
              I'm a <span style={{ color: "red" }}>{text}</span>
              <Cursor />
            </h1>
          </div>

          <NavMenu />
        </div>
      </section>
    </div>
  );
}
