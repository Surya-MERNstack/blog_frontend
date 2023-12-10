import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();




  const handleRegister = () => {

    if(!username || !email || !password) {
      toast.error("Fill the required Filed", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    axios
      .post(`${import.meta.env.VITE_URL}/api/auth/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPassword(res.data.password);
        navigate("/login");
      })
      .catch((err) => {
        toast.error("User already exists", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setError(true);
      });
  };

  return (
    <>
      <div className="w-full bg-black px-8 md:px-[200px] text-left py-4 flex justify-between items-center">
        <div className="text-lg font-bold text-white cursor-pointer md:text-xl ">
          <Link to="/">MyBlog</Link>
        </div>
        <div className="text-lg text-white">
          <Link
            to="/login"
            className="className='bg-green-500 hover:bg-green-600 hover:text-white text-white px-4 py-1 rounded-lg hover:transition-transform hover:ease-in-out"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center items-center h-[70vh] mt-20">
        <div className="md:w-[25%] w-[80%] flex flex-col justify-start items-center space-y-4">
          <h1 className="text-xl font-bold text-left">Create an account</h1>

          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
            placeholder="Enter your unique username"
            className="w-full px-4 py-2 border-2 border-black outline-0"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-black outline-0"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border-2 border-black outline-0"
          />
          <button
            // className="w-full px-4 py-4 text-lg font-bold text-white hover:bg-white hover:border-4  hover:border-solid  hover:text-black bg-black rounded-lg "
            className="w-full px-3 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black"
            onClick={handleRegister}
          >
            Register
          </button>

          <div className="flex items-center justify-center space-x-2">
            <p className="text-sm text-black">Already have an account?</p>
            <p className="hover:bg-green-500  hover:text-white text-black px-4 py-1 rounded-lg hover:transition-transform hover:ease-in-out">
              <Link to="/login">LogIn</Link>
            </p>
          </div>
          <p className="px-8 pt-8 text-sm text-center text-black md:px-0">
            By signing in or creating an account, you agree with our{" "}
            <span className="text-gray-500 sm text-">Terms & Conditions</span>{" "}
            and{" "}
            <span className="text-gray-500 sm text-">Privacy Statement</span>
          </p>
          <p className="px-8 text-sm text-center text-black md:px-0">
            All rights reserved. Copyright (2006-2023) – MyBlog.com™
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
