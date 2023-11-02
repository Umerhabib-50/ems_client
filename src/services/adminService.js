import axios from "axios";

export const createEmployee = async (details) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/admin/createEmployee",
      details,
      headers
    );

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllEmployees = async () => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/admin/employees/all",
      headers
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
