import ClipLoader from "react-spinners/ClipLoader";
import propTypes from "prop-types";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

Spinner.propTypes = {
  loading: propTypes.bool.isRequired,
};

export default Spinner;
