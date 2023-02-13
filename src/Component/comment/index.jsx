import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./comment.css";

export const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment) {
      let newEntry = {
        id: Date.now(),
        title: newComment,
        status: false,
      };
      setComments([...comments, newEntry]);
      setNewComment("");
    }
  };

  const deleteComment = (id) => {
    let newComments = comments.filter((comment, index) => comment.id !== id);
    setComments(newComments);
  };

  return (
    <div className=" comment text-left my-2">
      <h1 className="my-2 font-bold">Comment Section</h1>
      <ol>
        {comments && comments.length ? (
          " "
        ) : (
          <p className="text-gray-400">No Comments...</p>
        )}
        {comments &&
          comments
            .sort((a, b) => (a.id < b.id ? 1 : -1))
            .map((comment, index) => (
              <li className="flex flex-row capitalize shadow-md" key={index}>
                {comment.title}{" "}
                <span
                  className="px-2"
                  onClick={() => deleteComment(comment.id)}
                >
                  <FaTrash className="cursor-pointer" />
                </span>
              </li>
            ))}
      </ol>
      <textarea
        value={newComment}
        maxLength="500"
        onChange={(e) => setNewComment(e.target.value)}
        type="text"
        placeholder="Leave a comment not more than 500 characters"
        className="textArea"
      />
      <br />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};
