import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

export const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login!!!</div>;
  return (
    <div>
      <div>Welcome {user.username}</div>
    </div>
  );
};
