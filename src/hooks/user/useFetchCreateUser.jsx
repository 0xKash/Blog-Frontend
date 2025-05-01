import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchCreateUser = (username, password) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const { data } = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    createUser();
  }, [username, password]);

  return user;
};
