import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import useAuthRedirect from "../../hooks/auth/useAuthRedirect";

import LeftNav from "../../components/global/LeftNav";

const CreateStationPage = ({ stationAddSubmit }) => {
  // Redirect to login page if user is not logged in
  useAuthRedirect();

  // Navigate
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    station_number: "",
    street_number_or_milepost: "",
    street_prefix: "",
    street_or_highway_name: "",
    street_type: "",
    street_suffix: "",
    city: "",
    state: "",
    zip: "",
    county_code: "",
    phone_number: "",
    fax_number: "",
  });

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit handler
  const submitForm = (e) => {
    e.preventDefault();

    // filter out empty strings
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value.trim() !== "")
    );

    stationAddSubmit(filteredData)
      .then(() => {
        navigate("/stations");
        toast.success("Station added successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // HTML form
  return (
    <>
      <div className="flex-container">
        <LeftNav />
        <div className="right-panel-container container">
          <form onSubmit={submitForm}>
            <h2>Create Station</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="u-full-width"
                type="text"
                name="name"
                id="name"
                placeholder="Station 1"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="station_number">Station Number</label>
              <input
                className="u-full-width"
                type="text"
                name="station_number"
                id="station_number"
                placeholder="1"
                value={formData.station_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street_number_or_milepost">
                Street Number or Milepost
              </label>
              <input
                className="u-full-width"
                type="text"
                name="street_number_or_milepost"
                id="street_number_or_milepost"
                placeholder="1234"
                value={formData.street_number_or_milepost}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street_prefix">Street Prefix</label>
              <input
                className="u-full-width"
                type="text"
                name="street_prefix"
                id="street_prefix"
                placeholder="N"
                value={formData.street_prefix}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="street_or_highway_name">
                Street or Highway Name
              </label>
              <input
                className="u-full-width"
                type="text"
                name="street_or_highway_name"
                id="street_or_highway_name"
                placeholder="Main"
                value={formData.street_or_highway_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street_type">Street Type</label>
              <input
                className="u-full-width"
                type="text"
                name="street_type"
                id="street_type"
                placeholder="ST"
                value={formData.street_type}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street_suffix">Street Suffix</label>
              <input
                className="u-full-width"
                type="text"
                name="street_suffix"
                id="street_suffix"
                placeholder="SW"
                value={formData.street_suffix}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                className="u-full-width"
                type="text"
                name="city"
                id="city"
                placeholder="Anytown"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                className="u-full-width"
                type="text"
                name="state"
                id="state"
                placeholder="CA"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                className="u-full-width"
                type="text"
                name="zip"
                id="zip"
                placeholder="12345"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="county_code">County Code</label>
              <input
                className="u-full-width"
                type="text"
                name="county_code"
                id="county_code"
                placeholder="6073"
                value={formData.county_code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                className="u-full-width"
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="5556661234"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fax_number">Fax Number</label>
              <input
                className="u-full-width"
                type="text"
                name="fax_number"
                id="fax_number"
                placeholder="5556661234"
                value={formData.fax_number}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

CreateStationPage.propTypes = {
  stationAddSubmit: PropTypes.func.isRequired,
};

export default CreateStationPage;
