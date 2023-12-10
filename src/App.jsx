// import {Routes,Route, Navigate} from 'react-router-dom'
// import { UserContextProvider, UserContext } from './UserContext';
// import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import Footer from './components/Footer'
// import PostDetails from './pages/PostDetails'
// import { UserContextProvider } from './context/UserContext'
// import LogOut from './pages/LogOut'
// import CreatePost from './pages/CreatePost'
// import Profile from './pages/Profile'
// import EditPost from './pages/EditPost'
// import { ToastContainer } from 'react-toastify';
// import { useContext } from 'react';

// const App = () => {

//   return (
    
//     <UserContextProvider>
//       <Routes>
//         <Route exact path="/" element={<Home/>} />
//         <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
//         <Route exact path="/register" element={<Register/>} />
//         <Route exact path="/login" element={<Login/>} />
//         <Route exact path="/write" element={<CreatePost/>} />
//         <Route exact path="/logout" element={<LogOut/>} />
//         <Route exact path="/profile/:id" element={<Profile/>} />
//         <Route exact path="/edit/:id" element={<EditPost/>} />
//         </Routes>
//         <Footer/>
//         <ToastContainer/>
//     </UserContextProvider>
//   )


  
// }

// export default App



import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import PostDetails from './pages/PostDetails';
import LogOut from './pages/LogOut';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import EditPost from './pages/EditPost';
import { ToastContainer } from 'react-toastify';

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
