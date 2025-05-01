import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchComment = (id) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await fetch(`${API_URL}/comments/${id}`);
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        console.error(err);
      }
    };

    getComment();
  }, [id]);

  return comment;
};
