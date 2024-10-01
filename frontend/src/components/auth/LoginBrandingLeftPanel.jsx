import PropTypes from "prop-types";

// Import Image
import logoImage from "../../assets/images/logos/emberstone_logo_294x483.png";

const LoginBrandingLeftPanel = ({ logo = logoImage, title = "Emberstone" }) => {
  return (
    <div>
      <img src={logo} alt="Emberstone Logo" />
      <h1 className="">{title}</h1>
    </div>
  );
};

LoginBrandingLeftPanel.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default LoginBrandingLeftPanel;
