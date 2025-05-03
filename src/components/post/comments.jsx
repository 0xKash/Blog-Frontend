import { useFetchUser } from "../../hooks/user/useFetchUser";

const Comment = ({ userId, comment }) => {
  const author = useFetchUser(userId);

  return (
    <div className="flex flex-col content-start mb-5 gap-2">
      <div className="flex">
        <h2 className="card-title">{`@${author.username}`}</h2>
        <h2 className="card-title ml-auto">03/05/2025</h2>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
