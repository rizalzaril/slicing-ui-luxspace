import { useRouteError } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="text-center flex flex-col py-80 justify-center items-center min-h-screen  bg-white">
      <img src={logo} className="mb-4" alt="" />
      <h1 className="font-bold text-black text-6xl mb-4">404</h1>

      <p className="font-medium text-slate-500 text-3xl mb-4">
        {" "}
        Oops!, <span className="text-slate-500">Halaman tidak ada</span>
      </p>

      <p className="text-red-400">{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
