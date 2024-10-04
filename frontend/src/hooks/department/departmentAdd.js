import { useCallback } from "react";

const useDepartmentAdd = () => {
  const addDepartment = useCallback(async (formData) => {
    const response = await fetch("/api/v1/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  }, []);

  return { addDepartment };
};

export default useDepartmentAdd;
