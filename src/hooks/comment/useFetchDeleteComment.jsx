import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchDeleteComment = (id) => {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const deleteComment = async () => {
      try {
        const response = await fetch(`${API_URL}/comments/${id}`, {
          method: "delete",
          headers: { Authorization: localStorage.auth },
        });
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    deleteComment();
  }, [id]);

  return comment;
};
