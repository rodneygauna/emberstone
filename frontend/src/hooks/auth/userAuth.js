import { useCallback } from "react";

const useUserAuth = () => {
  const loginUser = useCallback(async ({ email, password }) => {
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
  }, []);

  return { loginUser };
};

export default useUserAuth;
