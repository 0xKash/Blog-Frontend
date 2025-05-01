import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchDeleteComment = (id) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const deleteComment = async () => {
      try {
        const response = await fetch(`${API_URL}/comments/${id}`, {
          method: "delete",
        });
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        console.error(err);
      }
    };

    deleteComment();
  }, [id]);

  return comment;
};
