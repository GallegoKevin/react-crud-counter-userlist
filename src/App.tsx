import { Footer } from "./components/Footer/Footer";
 import { Header } from "./components/Header";
 import { ListPerson } from "./components/ListPerson";
 import { UserList } from "./components/UserList";
 import '../src/components/UserList/User.css'
import { Counter } from "./components/ListPerson/Counter";




import React from 'react';
import './App.css'; // Archivo CSS para estilos
import UserState from './components/UserState/UserState';

export const App = () => {
  return (
    <>
      <Header message="Lista de Usuarios"/>
      <UserList />
      {/*<ListPerson />*/}
      <Footer />

    <div className="app-container">
      <h1 className="app-title">User List APP</h1>
      <UserState />
    </div>
    <Counter />


    </>
  );
};
