import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogOut = () => {
  const navigate = useNavigate();

  

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/api/auth/logout`)
      .then((res) => {
        toast.success("Logout Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate('/')
      })
      .catch((err) => {
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
      });
  }, []);

  return setTimeout(() => {
    navigate('/')
  },0)
};

export default LogOut;
