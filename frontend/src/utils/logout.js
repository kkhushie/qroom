import { toast } from "react-toastify";

export const logoutUser = (navigate) => {
  localStorage.removeItem("qroom_token");
  localStorage.removeItem("qroom_user");

  toast.success("Logged out successfully!");
  navigate("/login");
};
