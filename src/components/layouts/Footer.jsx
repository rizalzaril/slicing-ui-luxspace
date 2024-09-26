import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const btnStyle =
    "font-bold text-[22px] bg-transparent text-black focus:outline-none hover:border-none flex justify-between items-center w-full md:w-auto mb-4 md:mb-0";
  const ulStyle = "md:block transition-all duration-300 ml-8";
  const liStyle = "text-[18px] text-slate-600";

  return (
    <footer className="bg-white">
      <div className="flex justify-center items-center pt-12  mb-0">
        <img src={logo} alt="Logo" />
      </div>

      <div></div>
      <div className="flex flex-col md:flex-row justify-center md:pb-24 p-10 items-start gap-0 md:gap-20 ">
        {/* Overview Section */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <button
            className={btnStyle}
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
          >
            Overview{" "}
            <span className="md:hidden ml-2">
              {isOverviewOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <ul className={`${isOverviewOpen ? "block" : "hidden"} ${ulStyle} `}>
            <li>
              <a href="#" className={liStyle}>
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className={liStyle}>
                Refund
              </a>
            </li>
            <li>
              <a href="#" className={liStyle}>
                Promotion
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <button
            className={btnStyle}
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          >
            Company{" "}
            <span className="md:hidden ml-2">
              {isCompanyOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <ul className={`${isCompanyOpen ? "block" : "hidden"} ${ulStyle}`}>
            <li>
              <a href="#" className={liStyle}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={liStyle}>
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Explorer Section */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <button
            className={btnStyle}
            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
          >
            Explorer{" "}
            <span className="md:hidden ml-2">
              {isExplorerOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <ul className={`${isExplorerOpen ? "block" : "hidden"} ${ulStyle}`}>
            <li>
              <a href="#" className={liStyle}>
                Term & Conditions
              </a>
            </li>
            <li>
              <a href="#" className={liStyle}>
                Privacy & Policies
              </a>
            </li>
            <li>
              <a href="#" className={liStyle}>
                For Developer
              </a>
            </li>
          </ul>
        </div>

        {/* Special Letter Section */}
        <div className="flex flex-col items-start ml-7 md:mt-4 mt-6 md:ml-0">
          <h1 className="font-bold text-[22px] mb-4">Special Letter</h1>
          <div>
            <form action="">
              <div className="relative">
                <input
                  type="text"
                  className="h-[45px] w-full md:w-[300px] rounded-[12px] border-none p-4 pr-[60px] bg-[#F9F9F9] focus:outline-none"
                  placeholder="Type something..."
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white rounded-[8px] px-4 py-2 hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
