import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/users`);
        const { data } = await response.json();

        setUsers(data);

        return data;
      } catch (err) {
        console.error(err);
      }
    };

    getAllUsers();
  }, []);

  return users;
};
