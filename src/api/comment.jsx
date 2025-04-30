// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export async function getAllComments() {
  try {
    const response = await fetch(`${API_URL}/comments`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getComment(id) {
  try {
    const response = await fetch(`${API_URL}/comments/${id}`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteComment(id) {
  try {
    const response = await fetch(`${API_URL}/comments/${id}`, {
      method: "delete",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPostComments(postId) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createComment(postId) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      method: "post",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
