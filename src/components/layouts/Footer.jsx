import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex justify-center items-center mt-14 mb-14">
          <img src={logo} alt="" />
        </div>

        <div className="flex justify-center items-start gap-36 mb-24">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[22px] mb-4">Overview</h1>
            <ul>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Shipping
                </a>
              </li>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Refund
                </a>
              </li>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Promotion
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[22px] mb-4">Company</h1>
            <ul>
              <li>
                <a href="http://" className="text-[18px] text-slate-600">
                  About
                </a>
              </li>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[22px] mb-4">Explorer</h1>
            <ul>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Term & Conditions
                </a>
              </li>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  Privacy & Policies
                </a>
              </li>
              <li>
                <a href="http://" className="text-[18px]  text-slate-600">
                  For Developer
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[22px] mb-4">Special Letter</h1>
            <div>
              <form action="">
                <div className="relative">
                  <input
                    type="text"
                    className="h-[45px] w-[300px] rounded-[12px] border-none p-4 pr-[60px] bg-[#F9F9F9] focus:outline-none"
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
    </div>
  );
};

export default Footer;
