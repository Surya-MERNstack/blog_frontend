import { Link } from "react-router-dom";
import { useState, useContext ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    if(!email || !password){
      return toast.error("fill the required fields", {
          position : toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      })
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_URL}/api/auth/login`, { email, password });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data))
      toast.success("Login Successfully", {
        position : toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
      navigate("/");
    } catch (err) {
      setError(true);
      toast.error("Credentials Wrong ,Try again!!", {
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

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);
  

  return (
    <>
      <div className="w-full px-8 py-4 text-left bg-black md:px-[200px] flex justify-between items-center">
        <div className="text-lg font-bold text-white cursor-pointer md:text-xl ">
          <Link to="/">MyBlog</Link>
        </div>
        <div className="text-lg text-white">
          <Link to="/register" className=' hover:bg-red-600  hover:text-white px-4 py-1 rounded-lg'>Register</Link>
        </div>
      </div>
      <div className="w-full mx-auto flex-col justify-center items-center h-[60vh] mt-40 space-y-6">
        <div className="w-[80%] md:w-[25%] flex flex-col justify-center items-center space-y-4 mx-auto">
          <h1 className="text-xl font-bold text-left">
            Log In with your account
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-black outline-0"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border-2 border-black outline-0"
          />
          <button
            className="w-full px-3 py-3 text-lg font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black"
            onClick={handleLogin}
          >
            LogIn
          </button>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-sm text-black">New here?</p>
            <p className="font-semibold text-black sm text-">
              <Link to="/register" className="hover:bg-red-600 px-2 py-2  hover:text-white rounded-lg ">Register</Link>
            </p>
          </div>
        </div>
        <div>
        </div>
        <div>
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

export default Login;
