import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchLoginUser = (username, password) => {
  const [authentication, setAuthentication] = useState([]);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/login`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
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
        console.error(err);
      }
    };

    loginUser();
  }, [username, password]);

  return authentication;
};
