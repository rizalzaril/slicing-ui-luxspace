import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Cart from "./pages/Cart.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router} />
  </StrictMode>
);
