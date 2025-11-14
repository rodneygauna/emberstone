// Authentication API functions

export const loginUser = async ({ email, password }) => {
  const response = await fetch("/api/v1/users/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  localStorage.setItem("token", data.token);
  localStorage.setItem("current_user_id", data._id);
  return data;
};

export const registerUser = async (formData) => {
  const response = await fetch("/api/v1/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
