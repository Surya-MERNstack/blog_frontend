// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const LogOut = () => {
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(false);


//   useEffect(() => {
//     axios
//       .get(`https://blogserver-bskv.onrender.com/api/auth/logout`)
//       .then((res) => {
//         setLoader(true);
//         try{
//           navigate("/");
//           location.reload()
//           toast.success("Logout Successfully", {
//             position : toast.POSITION.TOP_RIGHT,
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//         })
//         }catch(err){

//         }
//       })
//       .catch((err) => {
//         toast.error("Try again!!", {
//           position : toast.POSITION.TOP_RIGHT,
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//       })
//       });
     
//   }, []);
//   return <div className="bg-red-400">Logout</div>;
// };
  
// export default LogOut;



import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blogserver-bskv.onrender.com/api/auth/logout`)
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

  return <div className=" h-min[100vh] bg-red-400 hidden"></div>; // Return null as this component doesn't render anything visible
};

export default LogOut;
