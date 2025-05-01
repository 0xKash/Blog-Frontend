import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const { data } = await response.json();

        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };

    getAllPosts();
  }, []);

  return posts;
};
