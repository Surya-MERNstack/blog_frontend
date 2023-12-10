import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BiUserCircle } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(UserContext);
  const [logout, setLonging] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLonging(true);
    window.location.reload();
    navigate('/')
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        {user ? (
          <>
            <h3 className="text-lg">
              <div className="  cursor-pointer">
                <Link to="/write" className="flex gap-2  bg-blue-500 px-2 py-1 text-white rounded-md hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-600 hover:delay-75 hover:ease-in-out hover:duration-100">
                <span className="text-md">Write</span>
                  <TfiWrite
                    title="write"
                    className="font-bold    mt-1"
                  />
                </Link>
              </div>
            </h3>
            <Link to={"/profile/" + user._id}>
              <div className="flex items-center justify-center space-x-2 cursor-pointer md:space-x-3 bg-slate-400 px-2 py-1  rounded-lg hover:border-slate-500 hover:border-2 hover:bg-white hover:text-slate-600 hover:delay-75 hover:ease-in-out hover:duration-100">
                <div className="flex items-center justify-center  rounded-full">
                  {/* Check if user.photo exists and is a valid URL */}
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <BiUserCircle
                      className=" md:text-xl bg-transparent "
                      title={user.username}
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold -mt-1">{user.username}</h3>
              </div>
            </Link>
            <h3 className="font-semibold bg-red-600 text-white px-2 py-1 rounded-lg hover:border-red-500 hover:border-2 hover:bg-white hover:text-red-600 hover:delay-75 hover:ease-in-out hover:duration-100">
              <Link to="/logout" onClick={handleLogout}>
                Logout
              </Link>
            </h3>
          </>
        ) : (
          <h3>
            <Link
              to="/login"
              className="hover:bg-green-500  hover:text-white text-black px-4 py-1 rounded-lg hover:transition-transform hover:ease-in-out"
            >
              Login
            </Link>
          </h3>
        )}
        {!user && (
          <h3>
            <Link
              to="/register"
              className="hover:bg-red-600  hover:text-white px-4 py-1 rounded-lg"
            >
              Register
            </Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
