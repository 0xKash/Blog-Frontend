import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`, {
          headers: { Authorization: localStorage.auth },
        });
        const test = await response.json();
        console.log(test);
        const { data } = test;

        setPosts(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    getAllPosts();
  }, []);

  return posts;
};
