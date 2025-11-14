import { checkAuth } from "../utils/auth/checkAuth";
import { getStation } from "../api/stations";

// Desc: Station Loader - fetches station data from the API
export const stationLoader = async ({ params }) => {
  // If the user is not logged in, return an error
  const authCheck = checkAuth();
  if (authCheck) {
    return authCheck;
  }

  return getStation(params.id);
};
