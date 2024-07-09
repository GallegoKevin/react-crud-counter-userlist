import React from 'react';
import './UserIteration.css'; // Archivo CSS para estilos

interface Users {
  id: number;
  nameUser: string;
  lastNameUser: string;
}

interface UserIterationProps {
  users: Users[];
}

const UserIteration = ({ users }: UserIterationProps) => {
  return (
    users.length > 0 ? (
      <section className="user-iteration-container">
        <h2 className="user-iteration-title">Iteración de Usuarios</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              {user.nameUser} {user.lastNameUser}
            </li>
          ))}
        </ul>
      </section>
    ) : (
      <p>No hay elementos</p>
    )
  );
};

export default UserIteration;
