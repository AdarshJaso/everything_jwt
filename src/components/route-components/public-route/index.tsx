import { FC, ReactNode } from 'react';

const PublicRoute: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container px-5 py-24 mx-auto flex flex-wrap">{children}</div>;
};

export default PublicRoute;
