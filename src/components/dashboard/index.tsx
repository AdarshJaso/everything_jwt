import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import { getCurrentUserRole } from '../../utils/getCurrentUserRole';
import ButtonsSet from '../ButtonsSet';

const Dashboard = () => {
  const authStatus = useSelector(selectAuth);
  const role = getCurrentUserRole(authStatus);
  return <ButtonsSet page="Dashboard" role={role} />;
};

export default Dashboard;
