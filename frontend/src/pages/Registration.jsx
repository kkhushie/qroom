import AuthForm from "../components/AuthForm";

const Registration = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <AuthForm type="register" />
    </div>
  );
};

export default Registration;