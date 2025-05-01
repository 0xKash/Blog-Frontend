import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchDeletePost = (id) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const deletePost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
          method: "delete",
        });
        const { data } = await response.json();

        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };

    deletePost();
  }, [id]);

  return post;
};
