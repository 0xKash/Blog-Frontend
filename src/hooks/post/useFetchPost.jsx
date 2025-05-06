import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPost = (id) => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
          headers: { Authorization: localStorage.auth },
        });
        const { data } = await response.json();

        setPost(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getPost();
  }, [id]);

  return post;
};
