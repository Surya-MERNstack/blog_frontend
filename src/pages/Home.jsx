import axios from 'axios';
import Navbar from '../components/Navbar';
import HomePosts from '../components/HomePosts';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import notfound from '../assets/not_found.gif'

const Home = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}/api/posts/all/`);
      setPosts(res.data);
      setLoader(false);
    } catch (err) {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className='md:px-[200px] px-8'>
        <div className='flex items-center justify-between mb-4'>
        </div>
        <input
          type='text'
          placeholder='Search by title...'
          className='border rounded px-2 py-1'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {!loader ? (
          filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link to={user ? `/posts/post/${post._id}` : '/login'} key={post._id}>
                <HomePosts post={post} />
              </Link>
            ))
          ) : (
            <div className='mt-4'>

              <img src={notfound} alt="#" srcset=""  />
            </div>
          )
        ) : (
          <div className='h-screen flex justify-center items-center'>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
