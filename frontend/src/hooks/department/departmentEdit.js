import { useCallback } from "react";

const useDepartmentEdit = () => {
  const editDepartment = useCallback(async (formData) => {
    const response = await fetch(`/api/v1/departments/${formData.id}`, {
      method: "PUT",
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

  return { editDepartment };
};

export default useDepartmentEdit;
