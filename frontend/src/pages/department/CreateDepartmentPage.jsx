import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import useAuthRedirect from "../../hooks/auth/useAuthRedirect";

import LeftNav from "../../components/global/LeftNav";

const CreateDepartmentPage = ({ departmentAddSubmit }) => {
  // Redirect to login page if user is not logged in
  useAuthRedirect();

  // Navigation
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    nfirs_id: "",
    state_fdid: "",
    name: "",
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

    departmentAddSubmit(filteredData)
      .then(() => {
        navigate("/department");
        toast.success("Department added successfully");
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
            <h2>Create Department</h2>
            <div>
              <label className="u-pull-left" htmlFor="nfirs_id">
                NFIRS ID
              </label>
              <input
                className="u-full-width"
                type="text"
                id="nfirs_id"
                name="nfirs_id"
                placeholder="123456789"
                value={formData.nfirs_id}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="u-pull-left" htmlFor="state_fdid">
                State FDID
              </label>
              <input
                className="u-full-width"
                type="text"
                id="state_fdid"
                name="state_fdid"
                placeholder="123456789"
                value={formData.state_fdid}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="u-pull-left" htmlFor="name">
                Fire Department Name
              </label>
              <input
                className="u-full-width"
                type="text"
                id="name"
                name="name"
                placeholder="City Fire Department"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="u-pull-left"
                htmlFor="street_number_or_milepost"
              >
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
              <label className="u-pull-left" htmlFor="street_prefix">
                Street Prefix
              </label>
              <input
                className="u-full-width"
                type="text"
                id="street_prefix"
                name="street_prefix"
                placeholder="N"
                value={formData.street_prefix}
                onChange={handleChange}
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
              <label className="u-pull-left" htmlFor="street_type">
                Street Type
              </label>
              <input
                className="u-full-width"
                type="text"
                id="street_type"
                name="street_type"
                placeholder="St"
                value={formData.street_type}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="u-pull-left" htmlFor="street_suffix">
                Street Suffix
              </label>
              <input
                className="u-full-width"
                type="text"
                id="street_suffix"
                name="street_suffix"
                placeholder="N"
                value={formData.street_suffix}
                onChange={handleChange}
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
              <label className="u-pull-left" htmlFor="county_code">
                County Code
              </label>
              <input
                className="u-full-width"
                type="text"
                id="county_code"
                name="county_code"
                placeholder="6073"
                value={formData.county_code}
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
              <label className="u-pull-left" htmlFor="fax_number">
                Fax Number
              </label>
              <input
                className="u-full-width"
                type="text"
                id="fax_number"
                name="fax_number"
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

CreateDepartmentPage.propTypes = {
  departmentAddSubmit: PropTypes.func.isRequired,
};

export default CreateDepartmentPage;
