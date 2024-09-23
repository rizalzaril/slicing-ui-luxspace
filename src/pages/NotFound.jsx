import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="text-center py-80 justify-center items-center min-h-screen  bg-slate-900">
      <h1 className="font-bold text-white text-6xl mb-4">404</h1>

      <p className="font-medium text-white text-3xl mb-4">
        {" "}
        Oops!, <span className="text-white">Halaman tidak ada</span>
      </p>

      <p className="text-red-400">{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
