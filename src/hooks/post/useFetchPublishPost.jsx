import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPublishPost = (id) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const publishPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}/publish`, {
          method: "put",
        });
        const { data } = await response.json();

        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };

    publishPost();
  }, [id]);

  return post;
};
