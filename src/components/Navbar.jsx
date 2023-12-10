import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BiUserCircle } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [logout,setLonging] = useState(false)
  console.log("navbar", user);


  const handleLogout = () => {
     setLonging(true)
     window.location.reload();
  }

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        {user ? (
          <>
            <h3 className="text-lg">
              <Link to="/write">
                <TfiWrite title="write" className="font-bold text-blue-500" />
              </Link>
            </h3>
            <Link to={"/profile/" + user._id}>
              <div className="flex items-center justify-center space-x-2 cursor-pointer md:space-x-3">
                <div className="flex items-center justify-center bg-black rounded-full">
                  {/* Check if user.photo exists and is a valid URL */}
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <BiUserCircle
                      className="text-lg md:text-xl bg-white"
                      title={user.username}
                    />
                  )}
                </div>
                <h3 className="text-lg">{user.username}</h3>
              </div>
            </Link>
            <h3 className="font-bold bg-red-600 text-white p-1 rounded-lg">
              <Link to="/logout" onClick={handleLogout}>Logout</Link>
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
