// Redirect to the app's landing page if the user is logged in (has a token)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLandingRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/incidents");
    }
  }, [navigate]);
};

export default useLandingRedirect;
