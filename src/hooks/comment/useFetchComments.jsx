import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchComments = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate("/");

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch(`${API_URL}/comments`, {
          headers: { Authorization: localStorage.auth },
        });

        const { data } = await response.json();

        setComments(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getAllComments();
  }, []);

  return comments;
};
