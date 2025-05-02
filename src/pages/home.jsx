import Navbar from "../components/navbar";
import PostPreview from "../components/postpreview-card";
import { useFetchPosts } from "../hooks/post/useFetchPosts";

const Home = () => {
  const posts = useFetchPosts();
  console.log(posts);

  posts.map((post) => console.log(post.title, post.content));

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-10 p-10">
        {posts.map((post) => (
          <PostPreview
            title={post.title}
            content={post.content}
            postId={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
