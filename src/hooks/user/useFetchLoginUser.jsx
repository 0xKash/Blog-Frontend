import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchLoginUser = (username, password) => {
  const [authentication, setAuthentication] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/login`, {
          method: "post",
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
        const { hash, salt } = data;
        const jwt = "Bearer " + hash + salt;

        setAuthentication(jwt);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    loginUser();
  }, [username, password]);

  return authentication;
};
