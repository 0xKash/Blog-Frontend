import App from "./App";
import Login from "./pages/login";
import Post from "./pages/post";
import Register from "./pages/register";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/post",
    element: <Post />,
  },
];

export default routes;
