import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchComment = (id) => {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await fetch(`${API_URL}/comments/${id}`, {
          headers: { Authorization: localStorage.auth },
        });
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getComment();
  }, [id]);

  return comment;
};
