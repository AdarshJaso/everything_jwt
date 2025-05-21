import { jwtDecode } from 'jwt-decode';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { login, selectAuth } from '@/store/authSlice';

type Credentials = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuth);
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  if (authStatus.isUser || authStatus.isAdmin) {
    return <Navigate to="/" />;
  }

  const loginData = async () => {
    const URL = 'http://localhost:8000/api/login';
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await loginData();
    if (result?.token) {
      localStorage.setItem('token', result.token);
      const decoded: any = jwtDecode(result.token);
      dispatch(login({ token: result.token, role: decoded.role }));
      navigate('/');
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div className="container px-5 pt-10 pb-5 mx-auto max-w-xs">
      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value={credentials.password}
            onChange={handleChange}
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={!(credentials.username.trim() && credentials.password.trim())}
          >
            Sign In
          </button>
        </div>
      </form>
      <div>
        <span className="font-semibold">Username :</span> <span className="mr-3">admin</span>
        <span className="font-semibold">P :</span> <span>1234</span>
      </div>
      <div>
        <span className="font-semibold">Username :</span> <span className="mr-3">user</span>
        <span className="font-semibold">P :</span> <span>testuser</span>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        type="button"
        onClick={() => navigate('/')}
      >
        Home
      </button>
    </div>
  );
};

export default Login;
