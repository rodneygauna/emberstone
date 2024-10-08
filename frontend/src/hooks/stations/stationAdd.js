import { useCallback } from "react";

const useStationAdd = () => {
  const addStation = useCallback(async (formData) => {
    const response = await fetch("/api/v1/stations", {
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

  return { addStation };
};

export default useStationAdd;
