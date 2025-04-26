import App from "./App";
import Home from "./pages/home";
import Register from "./pages/register";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default routes;
