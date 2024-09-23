import React from "react";

const ButtonCounter = (props) => {
  const handleBtn = () => {
    // Show alert by childre Props
    alert(children);
  };

  const { children = "default children", btnColor = "bg-black" } = props;
  return (
    <button onClick={() => handleBtn()} className={`${btnColor} text-white`}>
      {children}
    </button>
  );
};

const BelajarProps = () => {
  return (
    <div>
      <h1 className="text-red-50 py-8">Belajar Props Children</h1>
      <div className="flex gap-6">
        <ButtonCounter btnColor="bg-red-700">Login</ButtonCounter>
        <ButtonCounter btnColor="bg-green-700">Logout</ButtonCounter>
        <ButtonCounter btnColor="bg-purple-700">Register</ButtonCounter>
        <ButtonCounter />
      </div>
    </div>
  );
};

export default BelajarProps;
