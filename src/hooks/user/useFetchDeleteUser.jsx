import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchDeleteUser = (id) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          method: "delete",
          headers: { Authorization: localStorage.auth },
        });
        const { data } = await response.json();

        setUser(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    deleteUser();
  }, [id]);

  return user;
};
