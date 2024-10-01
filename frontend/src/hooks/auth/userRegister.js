import { useCallback } from "react";

const useUserRegister = () => {
  const registerUser = useCallback(async (formData) => {
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
  }, []);

  return { registerUser };
};

export default useUserRegister;
