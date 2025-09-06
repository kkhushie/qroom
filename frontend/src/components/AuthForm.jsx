import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const API = 'http://localhost:3000';

const AuthForm = ({ type }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isLogin = type === "login";

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const endpoint = isLogin ? "login" : "register";
  
    const payload = isLogin
      ? { email: form.email, password: form.password }
      : { name: form.name, email: form.email, password: form.password };
  
    try {
      const res = await axios.post(`${API}/api/auth/${endpoint}`, payload);
  
      const { token, user } = res.data;
      localStorage.setItem("qroom_token", token);
      localStorage.setItem("qroom_user", JSON.stringify(user));
  
      toast.success(`${isLogin ? "Logged in" : "Registered"} successfully!`);
  
      navigate("/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-black max-w-md w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        {isLogin ? "Login to Qroom" : "Register for Qroom"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {!isLogin && (
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
              required
            />
          </div>
        )}

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-black text-white rounded font-bold hover:bg-gray-800 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Registering..."
            : isLogin
            ? "Login"
            : "Register"}
        </button>
      </form>
      {isLogin ? (
  <p className="mt-4 text-center text-sm text-gray-600">
    Don’t have an account?{" "}
    <Link to="/register" className="text-teal-600 font-semibold underline hover:text-teal-800">
      Register here
    </Link>
  </p>
) : (
  <p className="mt-4 text-center text-sm text-gray-600">
    Already have an account?{" "}
    <Link to="/login" className="text-teal-600 font-semibold underline hover:text-teal-800">
      Login here
    </Link>
  </p>
)}
    </div>
  );
};

export default AuthForm;
