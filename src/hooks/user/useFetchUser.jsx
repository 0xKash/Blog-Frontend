import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchUser = (id) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          headers: {
            Authorization: localStorage.auth,
          },
        });
        const { data } = await response.json();

        setUser(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getUser();
  }, [id]);

  return user;
};
