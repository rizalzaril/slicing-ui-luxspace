import React from "react";

const ButtonProps = (props) => {
  const handleBtn = () => {
    // Show alert by childre Props
    alert(children);
  };

  const { children, className } = props;
  return (
    <button onClick={() => handleBtn()} className={`${className} text-white`}>
      {children}
    </button>
  );
};

export default ButtonProps;
