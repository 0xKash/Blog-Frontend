import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchCreateUser = (username, password) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.auth,
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const { data } = await response.json();
        setUser(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    createUser();
  }, [username, password]);

  return user;
};
