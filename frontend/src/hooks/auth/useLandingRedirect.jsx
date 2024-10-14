// Redirect to the app's landing page if the user is logged in (has a token)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLandingRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/incidents");
      toast.info("You are already logged in");
    }
  }, [navigate]);
};

export default useLandingRedirect;
