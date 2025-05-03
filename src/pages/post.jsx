import Navbar from "../components/navbar";
import PostLayout from "../components/post/post-layout";

const Post = () => {
  return (
    <>
      <Navbar />
      <div className="p-10 ">
        <PostLayout />
      </div>
    </>
  );
};

export default Post;
