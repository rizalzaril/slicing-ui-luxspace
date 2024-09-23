import InputForm from "../elements";
import ButtonProps from "../elements/button";

const FormRegister = () => {
  return (
    <div className="w-full max-w-xs">
      <form action="">
        <InputForm
          label="Full name"
          type="text"
          placeholder="Jhon Doe"
          name="fullName"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="*******"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="*******"
          name="confirmPassword"
        />
        <ButtonProps className="w-full bg-red-900 mt-6">Register</ButtonProps>
      </form>
    </div>
  );
};

export default FormRegister;
