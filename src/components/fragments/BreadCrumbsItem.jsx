import React from "react";
import Breadcrumbs from "../elements/breadcrumbs/Breadcrumbs";
import { useParams, useLocation } from "react-router-dom";

function BreadcrumbsItems() {
  const { id } = useParams(); // Get the id parameter from the URL
  const location = useLocation(); // Get the current path

  // Define the breadcrumb items based on the location path
  const Items = [
    { label: "Home", href: "/" },
    location.pathname.includes("details") && {
      label: "Details",
      href: `/details/${id}`,
    },
    location.pathname.includes("cart") && { label: "Cart", href: "/cart" },
  ].filter(Boolean); // Filter out any `false` values (when conditions are not met)

  return (
    <div className="">
      <Breadcrumbs items={Items} />
    </div>
  );
}

export default BreadcrumbsItems;
