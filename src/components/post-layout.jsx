import Navbar from "./navbar";

const PostLayout = () => {
  return (
    <div className="lg:px-80">
      <div className="card card-dash bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-5xl mb-5">My first post!</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="card card-dash bg-base-100 shadow-md mt-5">
        <div className="card-body">
          <h2 className="card-title  mb-5">Comment Something!</h2>
          <form action="">
            <input
              type="text"
              placeholder="Comment"
              className="input input-xs"
            />
            <button className="btn btn-xs ml-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
