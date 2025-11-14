import { checkAuth } from "../utils/auth/checkAuth";
import { getDepartment } from "../api/departments";

// Desc: Department Loader - fetches department data from the API
export const departmentLoader = async ({ params }) => {
  // If the user is not logged in, return an error
  const authCheck = checkAuth();
  if (authCheck) {
    return authCheck;
  }

  return getDepartment(params.id);
};
