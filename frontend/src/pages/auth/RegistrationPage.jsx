import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import LoginBrandingLeftPanel from "../../components/auth/LoginBrandingLeftPanel";

const RegistrationPage = ({ userRegistrationSubmit }) => {
  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    street_number_or_milepost: "",
    street_or_highway_name: "",
    city: "",
    state: "",
    zip: "",
    phone_number: "",
    personnel_number: "",
    rank: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Navigation
  const navigate = useNavigate();

  // Form submit handler
  const submitForm = (e) => {
    e.preventDefault();
    // Validate password
    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }
    userRegistrationSubmit(formData)
      .then(() => {
        navigate("/");
        toast.success("Registered successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // HTML structure for the registration form
  return (
    <div className="row">
      <div className="one-half column vertical-center login-branding">
        <LoginBrandingLeftPanel />
      </div>
      <div className="one-half column vertical-center">
        <form onSubmit={submitForm}>
          <h2>Registration</h2>
          <div>
            <label className="u-pull-left" htmlFor="first_name">
              First Name
            </label>
            <input
              className="u-full-width"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Bob"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="last_name">
              Last Name
            </label>
            <input
              className="u-full-width"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Beckwith"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="street_number_or_milepost">
              Street Number or Milepost
            </label>
            <input
              className="u-full-width"
              type="text"
              id="street_number_or_milepost"
              name="street_number_or_milepost"
              placeholder="123"
              value={formData.street_number_or_milepost}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="street_or_highway_name">
              Street or Highway Name
            </label>
            <input
              className="u-full-width"
              type="text"
              id="street_or_highway_name"
              name="street_or_highway_name"
              placeholder="Main"
              value={formData.street_or_highway_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="city">
              City
            </label>
            <input
              className="u-full-width"
              type="text"
              id="city"
              name="city"
              placeholder="Anytown"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="state">
              State
            </label>
            <input
              className="u-full-width"
              type="text"
              id="state"
              name="state"
              placeholder="CA"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="zip">
              Zip
            </label>
            <input
              className="u-full-width"
              type="text"
              id="zip"
              name="zip"
              placeholder="12345"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="phone_number">
              Phone Number
            </label>
            <input
              className="u-full-width"
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="5556661234"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="personnel_number">
              Personnel Number
            </label>
            <input
              className="u-full-width"
              type="text"
              id="personnel_number"
              name="personnel_number"
              placeholder="123456789"
              value={formData.personnel_number}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="rank">
              Rank
            </label>
            <input
              className="u-full-width"
              type="text"
              id="rank"
              name="rank"
              placeholder="Captain"
              value={formData.rank}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="email">
              Email
            </label>
            <input
              className="u-full-width"
              type="email"
              id="email"
              name="email"
              placeholder="bobbeckwith@email.com"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="u-pull-left" htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              className="u-full-width"
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="********"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="u-pull-left" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

RegistrationPage.propTypes = {
  userRegistrationSubmit: PropTypes.func.isRequired,
};

export default RegistrationPage;
