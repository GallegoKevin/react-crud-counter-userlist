import React from 'react';
import './Form.css'; // Archivo CSS para estilos

interface FormProps {
  nameUser: string;
  setNameUser: React.Dispatch<React.SetStateAction<string>>;
  lastNameUser: string;
  setLastNameUser: React.Dispatch<React.SetStateAction<string>>;
  createUser: () => void;
}

const Form = ({ nameUser, setNameUser, lastNameUser, setLastNameUser, createUser }: FormProps) => {
  return (
    <section className="form-container">
      <div className="input-container">
        <label htmlFor="nameInput">Ingresar Nombre: </label>
        <input
          id="nameInput"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
          type="text"
          placeholder="Nombre"
          className="input-field"
        />
      </div>
      <div className="input-container">
        <label htmlFor="lastNameInput">Ingresar Apellido: </label>
        <input
          id="lastNameInput"
          value={lastNameUser}
          onChange={(e) => setLastNameUser(e.target.value)}
          type="text"
          placeholder="Apellido"
          className="input-field"
        />
      </div>
      <button onClick={createUser} type="button" className="submit-button">
        Agregar
      </button>
    </section>
  );
};

export default Form;
