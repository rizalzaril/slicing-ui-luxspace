import { Link } from "react-router-dom";
import FormLogin from "../fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen  bg-slate-900">
      <div className="w-full  max-w-xs">
        <h1 className="text-3xl text-white font-bold">{title}</h1>
        <p className="font-medium text-slate-50 mb-12">
          Welcome, Please Enter Your Details
        </p>
        {children}

        <p className="text-white py-12">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && <Link to="/register">Register</Link>}
          {type === "register" && <Link to="/login">Login</Link>}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
