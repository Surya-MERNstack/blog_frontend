import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [categories, setCategories] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    setConfirmDelete(true);
  };
  const cancelDelete = () => {
    setConfirmDelete(false);
  };

  const postDelete = async () => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_URL}/api/posts/post/` + postId)
        .then((res) => {
          navigate("/");
        });
    } catch (err) {
      // console.log(err)
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios
        .delete(`${import.meta.env.VITE_URL}/api/comments/comment/` + id)
        .then((res) => {
          // console.log('comment deleted')
          fetchComments();
          toast.success("Successfully deleted", {
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

  const fetchComments = async () => {
    setLoader(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/comments/post/` + id
      );
      //console.log(res.data)
      setCommentList(res.data);
      // console.log(commentList)
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  const fetchPostData = async () => {
    setLoader(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/api/posts/post/` + id
      );
      setPostId(res.data._id);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPhoto(res.data.photo);
      setUsername(res.data.username);
      setUserId(res.data.userId);
      setCategories(res.data.categories);
      setUpdatedAt(res.data.updatedAt);
      setLoader(false);
    } catch (err) {
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [id]);

  useEffect(() => {
    fetchPostData();
  }, [id]);

  const handleComment = () => {
    if (!comment)
      return toast.error("Fill the required Fields", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    axios
      .post(`${import.meta.env.VITE_URL}/api/comments/create`, {
        comment: comment,
        author: user.username,
        postId: id,
        userId: user._id,
      })
      .then((res) => {
        setComment("");
        fetchComments();
        toast.success("Successfully Posted", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Try again", {
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
  };

  const handleEdit = () => {
    navigate("/edit/" + postId);
  };

  return (
    <>
      <Navbar />
      {confirmDelete ? (
        <div className="flex items-center justify-center h-screen ">
          <div className="flex flex-col px-20 py-10 border-2 shadow-md rounded-xl border-solid md:px-40 md:py-20">
            <h3 className="text-lg font-bold">Are you sure?</h3>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <button
                onClick={postDelete}
                className="bg-green-500 px-4 py-2 text-white hover:bg-white hover:text-black hover:delay-75 hover:duration-75 ease-linear hover:border-2 hover:rounded-xl delay-75 duration-75 hover:border-solid font-semibold hover:border-green-700 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-red-500 px-4 py-2 text-white hover:bg-white hover:text-black hover:delay-75 hover:duration-75 ease-linear hover:border-2 hover:rounded-xl delay-75 duration-75 hover:border-solid font-semibold hover:border-red-700 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-[200px] mt-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {title}
            </h1>
            {user._id === userId && username === user.username ? (
              <div className="flex items-center justify-center space-x-2">
                <p className="text-xl cursor-pointer" onClick={handleEdit}>
                  <BiEdit />
                </p>
                <p className="text-xl cursor-pointer" onClick={handleDelete}>
                  <MdDelete />
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p className="text-sm text-gray-400">@{username}</p>
            <div>
              <p className="text-sm text-gray-400">
                {updatedAt.slice(0, 10)} - {updatedAt.slice(11, 16)}
              </p>
            </div>
          </div>
          {!loader ? (
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dfstudio.com%2Fdigital-image-size-and-resolution-what-do-you-need-to-know%2F&psig=AOvVaw3lfZCtKys0CEoAIll_Kcur&ust=1702189005269000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKC1vu7agYMDFQAAAAAdAAAAABAE"
              alt="image"
              className="w-full mx-auto mt-4"
            />
          ) : (
            <div className="h-[20vh] flex justify-center items-center">
              <Loader />
            </div>
          )}
          <p className="mx-auto mt-8">{desc}</p>
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex items-center">
              {!loader ? (
                categories.map((c) => (
                  <p
                    key={c._id}
                    className="flex items-center mr-4 text-gray-400 "
                  >
                    {c}
                  </p>
                ))
              ) : (
                <div className="mt-8 h-[20vh] flex justify-center items-center">
                  <Loader />
                </div>
              )}
            </div>
          </div>

          {/* comment section */}
          <div className="flex flex-col mt-4">
            <p className="mt-6 mb-4 font-semibold">Comments:</p>

            <>
              {commentList.map((c) => (
                <>
                  <div className="px-2 py-2 mt-2 bg-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-600">@{c.author}</h3>
                      <div className="flex items-center justify-center space-x-4">
                        <p className="text-gray-500">
                          {c.updatedAt.slice(0, 10)} -{" "}
                          {c.updatedAt.slice(11, 16)}
                        </p>
                        {c.author === user.username || user._id === c.userId ? (
                          <p
                            className="text-lg cursor-pointer"
                            onClick={() => deleteComment(c._id)}
                          >
                            <MdDelete />
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <p className="px-4 mt-2">{c.comment}</p>
                  </div>
                </>
              ))}
            </>

            {/* write a comment */}
            <div className="flex flex-col mt-4 md:flex-row">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment"
                type="text"
                required={true}
                className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"
              />
              <button
                className="bg-red-500 text-white px-4 py-2 font-semibold cursor-pointer rounded-lg"
                onClick={handleComment}
              >
                Add comment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
