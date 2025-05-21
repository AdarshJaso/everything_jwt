import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/authSlice';
import { getCurrentUserRole } from '../../utils/getCurrentUserRole';
import ButtonsSet from '../ButtonsSet';

const NotFound = () => {
  const authStatus = useSelector(selectAuth);
  const role = getCurrentUserRole(authStatus);
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <ButtonsSet page="Not Found" role={role} />
    </div>
  );
};

export default NotFound;
