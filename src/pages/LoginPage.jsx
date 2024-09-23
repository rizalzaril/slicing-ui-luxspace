import AuthLayouts from "../components/layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
