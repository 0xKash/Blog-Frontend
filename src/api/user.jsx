// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "delete",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
