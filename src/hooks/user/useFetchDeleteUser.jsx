import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchDeleteUser = (id) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const deleteUser = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          method: "delete",
        });
        const { data } = await response.json();

        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    deleteUser();
  }, [id]);

  return user;
};
