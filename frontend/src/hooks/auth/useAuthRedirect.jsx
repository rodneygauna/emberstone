// Redirect to login page if user is not logged in (has no token)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
};

export default useAuthRedirect;
