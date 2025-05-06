const Navbar = () => {
  return (
    <div className="navbar bg-main shadow-md p-2 ">
      <a className="btn btn-ghost text-xl">Kash.blog</a>
      <p className="ml-auto mr-5">{localStorage.username}</p>
    </div>
  );
};

export default Navbar;
