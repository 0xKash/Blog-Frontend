import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/users`, {
          headers: { Authorization: localStorage.auth },
        });
        const { data } = await response.json();

        setUsers(data);

        return data;
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getAllUsers();
  }, []);

  return users;
};
