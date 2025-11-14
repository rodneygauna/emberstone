import useAuthRedirect from "../../hooks/auth/useAuthRedirect";
import LeftNav from "../../components/global/LeftNav";

const IncidentsLandingPage = () => {
  // Redirect to login page if user is not logged in
  useAuthRedirect();

  return (
    <div>
      <LeftNav />
    </div>
  );
};

export default IncidentsLandingPage;
