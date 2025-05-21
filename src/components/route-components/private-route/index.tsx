import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from '@/store/authSlice';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const authStatus = useSelector(selectAuth);

  if (!authStatus.isUser) {
    return <Navigate to="/login" />;
  }
  return <div className="container px-5 py-24 mx-auto flex flex-wrap">{children}</div>;
};

export default PrivateRoute;
