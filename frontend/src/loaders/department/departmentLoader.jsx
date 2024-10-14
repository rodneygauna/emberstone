import { checkAuth } from "../../utils/auth/checkAuth";

// Desc: Deparament Loader - fetches department data from the API
export const departmentLoader = async ({ params }) => {
  // If the user is not logged in, return an error
  const authCheck = checkAuth();
  if (authCheck) {
    return authCheck;
  }

  const response = await fetch(`/api/v1/departments/${params.id}`, {
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
