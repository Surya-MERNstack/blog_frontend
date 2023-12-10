import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import PostDetails from "./pages/PostDetails";
import LogOut from "./pages/LogOut";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import EditPost from "./pages/EditPost";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/post/:id" element={<PostDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<CreatePost />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </UserContextProvider>
  );
};

export default App;
