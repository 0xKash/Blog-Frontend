import Navbar from "../components/navbar";
import PostPreview from "../components/postpreview-card";

const Home = () => {
  return (
    <div className="flex items-center flex-col gap-10 p-10">
      <PostPreview title={"My first post!"} />
      <PostPreview title={"My second post!"} />
      <PostPreview title={"My third post!"} />
      <PostPreview title={"My first post!"} />
      <PostPreview title={"My second post!"} />
      <PostPreview title={"My third post!"} />
    </div>
  );
};

export default Home;
