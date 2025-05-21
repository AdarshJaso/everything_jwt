import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from '@/store/authSlice';

const AdminRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const authStatus = useSelector(selectAuth);
  if (authStatus.isUser && authStatus.isAdmin) {
    return <div className="container px-5 py-24 mx-auto flex flex-wrap">{children}</div>;
  }
  return <Navigate to="/login" />;
};

export default AdminRoute;
