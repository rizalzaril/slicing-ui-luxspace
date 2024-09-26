import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  const location = useLocation(); // Get the current path

  return (
    <div className="bg-[#F9F9F9]  flex w-full mt-20">
      <nav className="p-4 ml-24" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {items.map((item, index) => {
            const isActive = location.pathname === item.href;

            return (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={item.href}
                  className={`inline-flex items-center text-[18px] font-medium ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-gray-900"
                  }`}
                >
                  {item.icon && (
                    <item.icon className="w-4 h-4 mr-2 text-gray-400" />
                  )}
                  {item.label}
                </Link>
                {index !== items.length - 1 && (
                  <span className="font-bold text-slate-400 ml-4">/</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
