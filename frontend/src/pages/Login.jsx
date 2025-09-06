import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
