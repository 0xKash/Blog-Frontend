// eslint-disable-next-line no-undef
const API_URL = process.env.API_URL;

export const loginUser = async (username, password, redirect) => {
  try {
    let response = await fetch(`${API_URL}/users/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    response = await response.json();

    if (response.status === "error") {
      console.log("login error");
      return;
    } else {
      const { data } = response;

      localStorage.auth = data.token;
      localStorage.username = data.user.username;

      console.log(localStorage);
      redirect("/");
    }
  } catch (err) {
    console.error(err);
  }
};
