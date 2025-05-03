import Navbar from "../components/navbar";
import PostPreview from "../components/home/postpreview-card";
import { useFetchPosts } from "../hooks/post/useFetchPosts";

const Home = () => {
  const posts = useFetchPosts();

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-10 p-10">
        {posts.map(
          (post) =>
            post.published && (
              <PostPreview
                title={post.title}
                content={post.content}
                postId={post.id}
              />
            )
        )}
      </div>
    </>
  );
};

export default Home;
