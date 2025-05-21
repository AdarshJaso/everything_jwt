import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';

interface DecodedToken {
  username: string;
  role: string;
  exp: number;
  iat: number;
}

// checks if the authentication is done before rendering the components
export const useAuthInitializer = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          dispatch(login({ token, role: decoded.role }));
        } else {
          console.warn('Token expired');
          localStorage.removeItem('token');
          dispatch(logout());
        }
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
      }
    }
    setIsLoading(false);
  }, [dispatch]);

  return isLoading;
};
