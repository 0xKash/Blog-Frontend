import { useEffect, useState } from "react";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchPostComments = (postId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPostComments = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${postId}/comments`);
        const { data } = await response.json();

        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    getPostComments();
  }, [postId]);

  return comments;
};
