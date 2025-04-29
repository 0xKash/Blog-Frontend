export async function getAllUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(username, password) {
  try {
    const response = await fetch("http://localhost:3000/users", {
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
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "delete",
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
