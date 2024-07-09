// src/components/UserState/UserState.tsx
import React, { useState } from 'react';
import Form from '../Form/Form';
import UserIteration from '../UserIteration/UserIteration';

interface Users {
  id: number;
  nameUser: string;
  lastNameUser: string;
}

const UserState = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [nameUser, setNameUser] = useState<string>('');
  const [lastNameUser, setLastNameUser] = useState<string>('');

  const createUser = () => {
    const userInfo: Users = { id: new Date().getMilliseconds(), nameUser, lastNameUser };
    setUsers([...users, userInfo]);
    setNameUser('');
    setLastNameUser('');
  };

  return (
    <>
      <Form 
        nameUser={nameUser}
        setNameUser={setNameUser}
        lastNameUser={lastNameUser}
        setLastNameUser={setLastNameUser}
        createUser={createUser}
      />
      <UserIteration users={users} />
    </>
  );
};

export default UserState;
