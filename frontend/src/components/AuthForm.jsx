import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const API = 'http://localhost:3000';

const AuthForm = ({ type }) => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    password: "",
    confirmPassword: "" 
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const isLogin = type === "login";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // Real-time password matching validation
    if (name === 'password' || name === 'confirmPassword') {
      validatePasswords();
    }
  };

  const validatePasswords = () => {
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: "Passwords do not match"
      }));
    } else if (form.confirmPassword && form.password === form.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin) {
      if (!form.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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

  const passwordsMatch = form.password && form.confirmPassword && form.password === form.confirmPassword;
  const passwordsNotEmpty = form.password && form.confirmPassword;

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
              className={`w-full px-4 py-2 border-2 border-black rounded focus:outline-none ${
                errors.name ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
        )}

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 border-black rounded focus:outline-none ${
              errors.email ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 border-black rounded focus:outline-none ${
              errors.password ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password - Only for Registration */}
        {!isLogin && (
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border-2 rounded focus:outline-none ${
                errors.confirmPassword 
                  ? 'border-red-500' 
                  : passwordsNotEmpty && passwordsMatch 
                    ? 'border-green-500' 
                    : 'border-black'
              }`}
              required={!isLogin}
            />
            
            {/* Error Message */}
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <i className="fas fa-times-circle mr-1"></i>
                {errors.confirmPassword}
              </p>
            )}
            
            {/* Success Message */}
            {passwordsNotEmpty && passwordsMatch && (
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <i className="fas fa-check-circle mr-1"></i>
                Passwords match!
              </p>
            )}
          </div>
        )}

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
          Don't have an account?{" "}
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
