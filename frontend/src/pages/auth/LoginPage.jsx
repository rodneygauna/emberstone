import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useLandingRedirect from "../../hooks/auth/useLandingRedirect";
import { loginUser } from "../../api/auth";

import LoginBrandingLeftPanel from "../../components/auth/LoginBrandingLeftPanel";

const LoginPage = () => {
  // Redirect to landing page if user is already logged in
  useLandingRedirect();

  // Navigation
  const navigate = useNavigate();

  // If user is already logged in, redirect to incidents page
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/incidents");
    }
  }, [navigate]);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      navigate("/incidents");
      toast.success("Logged in successfully");
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      toast.error(error.message);
    }
  };

  // HTML structure for the login form
  return (
    <div className="row">
      <div className="one-half column vertical-center login-branding">
        <LoginBrandingLeftPanel />
      </div>
      <div className="one-half column vertical-center">
        <form onSubmit={submitForm}>
          <h2>Login</h2>
          <div>
            <label className="u-pull-left" htmlFor="email">
              Email
            </label>
            <input
              className="u-full-width"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="password">
              Password
            </label>
            <input
              className="u-full-width"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="u-pull-left" type="submit">
            Login
          </button>
          <a href="#" className="u-pull-right vertical-center-text">
            Forgot Password
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
