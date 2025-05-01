import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchUser = (id) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`);
        const { data } = await response.json();

        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [id]);

  return user;
};
