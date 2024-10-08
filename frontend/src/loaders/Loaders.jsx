// Deparament Loader - fetches department data from the API
export const departmentLoader = async ({ params }) => {
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
