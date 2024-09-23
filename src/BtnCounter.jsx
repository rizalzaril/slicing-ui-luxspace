import { useState } from "react";

const BtnCounter = (props) => {
  const { children, btnStyle, textBtnColor } = props;
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={() => handleCountPlus()}
        className={`${btnStyle} ${textBtnColor}`}
      >
        {children}({count})
      </button>
    </div>
  );
};

const Counter = () => {
  return (
    <div>
      <h1 className="text-white py-8">Counter Button</h1>
      <BtnCounter btnStyle="bg-red-900" textBtnColor="text-white">
        Count +
      </BtnCounter>
    </div>
  );
};

export default Counter;
