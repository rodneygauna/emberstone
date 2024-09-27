import PropTypes from "prop-types";

// Import Image
import heroImage from "../../assets/images/logos/emberstone_logo_294x483.png";

const Hero = ({
  title = "Emberstone",
  subtitle = "Welcome to the home page!",
  logo = heroImage,
}) => {
  return (
    <div className="section hero">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h4 className="hero-heading">{title}</h4>
            <p className="hero-heading">{subtitle}</p>
          </div>
          <div className="one-half column">
            <img className="hero-logo" src={logo} alt="Emberstone Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.string,
};

export default Hero;
