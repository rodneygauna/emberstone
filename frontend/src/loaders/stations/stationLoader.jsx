import { checkAuth } from "../../utils/auth/checkAuth";

// Desc: Station Loader - fetches station data from the API
export const stationLoader = async ({ params }) => {
  // If the user is not logged in, return an error
  const authCheck = checkAuth();
  if (authCheck) {
    return authCheck;
  }

  const response = await fetch(`/api/v1/stations/${params.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
