import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchCreateComment = (postId, content) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const createComment = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: content,
          }),
        });
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        console.error(err);
      }
    };

    createComment();
  }, [postId, content]);

  return comment;
};
