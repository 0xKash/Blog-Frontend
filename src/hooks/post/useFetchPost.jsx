import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPost = (id) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const { data } = await response.json();

        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };

    getPost();
  }, [id]);

  return post;
};
