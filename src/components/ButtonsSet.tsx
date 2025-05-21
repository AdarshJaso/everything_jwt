import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectAuth } from '../store/authSlice';

interface ButtonSets {
  page: string;
  role: string;
}

const ButtonsSet = ({ page, role }: ButtonSets) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuth);
  const [isLoggedIn, setIsLoggedIn] = useState(authStatus.isUser || authStatus.isAdmin);

  const handleLoginStatus = () => {
    if (isLoggedIn) {
      dispatch(logout());
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <div className="text-xl mb-5 w-full">{`${page} page (Role:${role})`}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate('/')}
      >
        Home
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleLoginStatus}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate('/admin')}
      >
        Admin
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate('/dashboard')}
      >
        Dashboard
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate('/xyz')}
      >
        Not Found
      </button>
    </div>
  );
};

export default ButtonsSet;
