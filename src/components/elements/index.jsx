import LabelLogin from "./Label";
import InputLogin from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <LabelLogin
        htmlFor={name}
        className="block text-white text-sm font-bold mb-2"
      >
        {label}{" "}
      </LabelLogin>
      <InputLogin
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-sm border w-full placeholder:to-sky-500 py-2 rounded 2-full px-3 text-slate-700"
      />

      {/* <ButtonProps className="w-full bg-red-900 mt-6">Login</ButtonProps> */}
    </div>
  );
};

export default InputForm;
