// Desc: Check if user is logged in
export const checkAuth = () => {
  if (!localStorage.getItem("token")) {
    return {
      status: 401,
      message: "You must be logged in to view this page",
    };
  }
  return null; // Return null if the user is authenticated
};
