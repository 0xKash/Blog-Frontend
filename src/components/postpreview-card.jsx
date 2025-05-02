import { useNavigate } from "react-router-dom";

const PostPreview = ({ title, content, postId }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${postId}`)}
      className="card card-dash bg-base-100 min-w-200 shadow-md transition hover:scale-101"
    >
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex">
          <p className="font-bold">@Kash</p>
          <p className="font-bold flex justify-end">26/04/2025</p>
        </div>
        <p>{content}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default PostPreview;
