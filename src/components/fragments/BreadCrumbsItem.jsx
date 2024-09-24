import React from "react";
import Breadcrumbs from "../elements/breadcrumbs/Breadcrumbs";

function BreadcrumbsItems() {
  const Items = [
    { label: "Home", href: "/" },
    { label: "Details", href: "/details" },
    { label: "Project X", href: "/login/1/details" },
  ];

  return (
    <div className="">
      <Breadcrumbs items={Items} />
    </div>
  );
}

export default BreadcrumbsItems;
