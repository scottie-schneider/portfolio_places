import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Scottie Schneider',
      image: 'https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg',
      places: 3
    }
  ];
  return <UsersList items={USERS}/>
}

export default Users;