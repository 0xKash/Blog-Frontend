import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const useFetchCreateComment = (postId, content) => {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const createComment = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.auth,
          },
          body: JSON.stringify({
            content: content,
          }),
        });
        const { data } = await response.json();

        setComment(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    createComment();
  }, [postId, content]);

  return comment;
};
