import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/store/authSlice';
import { getCurrentUserRole } from '../../utils/getCurrentUserRole';
import ButtonsSet from '../ButtonsSet';

const Home = () => {
  const authStatus = useSelector(selectAuth);
  const role = getCurrentUserRole(authStatus);
  return <ButtonsSet page="Home" role={role} />;
};

export default Home;
