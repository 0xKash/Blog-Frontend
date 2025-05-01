import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch(`${API_URL}/comments`);
        const { data } = await response.json();

        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    getAllComments();
  }, []);

  return comments;
};
