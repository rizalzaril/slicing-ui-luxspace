import InputForm from "../elements";
import ButtonProps from "../elements/button";

const FormLogin = () => {
  return (
    <div className="w-full max-w-xs">
      <form action="">
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
        <ButtonProps className="w-full bg-red-900 mt-6">Login</ButtonProps>
      </form>
    </div>
  );
};

export default FormLogin;
