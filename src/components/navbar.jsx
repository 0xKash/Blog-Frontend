import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/authUtils";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-main shadow-md p-2 ">
      <a className="btn btn-ghost text-xl">Kash.blog</a>
      <button
        className="btn btn-ghost ml-auto mr-5"
        onClick={() => logoutUser(navigate)}
      >
        Log out
      </button>
      <p className="mr-5">{localStorage.username}</p>
    </div>
  );
};

export default Navbar;
