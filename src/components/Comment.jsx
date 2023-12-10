import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({ c }) => {
  const { user } = useContext(UserContext);
  const deleteComment = async (id) => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_URL}/api/comments/comment/` + id)
        .then((res) => {
          toast.success("comment deleted", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } catch (err) {
      toast.error("Try again!!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className="bg-gray-200 rounded-lg px-2 py-2 mt-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-gray-500">
            {c.updatedAt.slice(0, 10)} - {c.updatedAt.slice(11, 16)}
          </p>
          {c.author === user.username || user._id === c.userId ? (
            <p className="text-lg" onClick={() => deleteComment(c._id)}>
              <MdDelete />
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="mt-2 px-4">{c.comment}</p>
    </div>
  );
};

export default Comment;
