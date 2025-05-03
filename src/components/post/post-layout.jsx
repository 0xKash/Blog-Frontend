import { useParams } from "react-router-dom";
import { useFetchPost } from "../../hooks/post/useFetchPost";
import { useFetchPostComments } from "../../hooks/comment/useFetchPostComments";
import Comment from "./comments";

const PostLayout = () => {
  const params = useParams();
  const post = useFetchPost(params.postId);
  const comments = useFetchPostComments(params.postId);

  return (
    <div className="lg:px-80">
      <div className="card card-dash bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-5xl mb-5">{post.title}</h2>
          <p className="text-xl">{post.content}</p>
        </div>
      </div>
      <div className="card card-dash bg-base-100 shadow-md mt-5">
        <div className="card-body">
          <h2 className="card-title  mb-5 text-2xl">Comment Something!</h2>
          {comments.map((comment) => (
            <Comment userId={comment.authorId} comment={comment} />
          ))}
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
