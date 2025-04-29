export async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:3000/posts");
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createPost(title, content) {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "post",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function publishPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}/publish`, {
      method: "put",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePost(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "delete",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
