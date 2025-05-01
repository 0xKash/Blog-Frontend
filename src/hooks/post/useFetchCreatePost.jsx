import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchCreatePost = (title, content) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const createPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title,
            content: content,
          }),
        });
        const { data } = await response.json();

        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };

    createPost();
  }, [title, content]);

  return post;
};
