import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  // Establecer el valor inicial del contador
  const [valueCounter, setValueCounter] = useState(10);

  // Función para incrementar el contador
  const handleIncrement = () => {
    setValueCounter(valueCounter + 1);
  };

  // Función para decrementar el contador, con validación para no ir por debajo de cero
  const handleDecrement = () => {
    if (valueCounter > 0) {
      setValueCounter(valueCounter - 1);
    }
  };

  // Función para resetear el contador al valor inicial (10)
  const handleReset = () => {
    setValueCounter(10);
  };


  return (
    <section className="counter-container">
      <header>
        <h1 className="counter-title">Counter Component - {valueCounter}</h1>
      </header>
      <div className="button-container">
        <button className="decrement-button" onClick={handleDecrement} disabled={valueCounter <= 0}>
          Decrementar
        </button>
        <button className="reset-button" onClick={handleReset}>Resetear</button>
        <button className="increment-button" onClick={handleIncrement}>Incrementar</button>
      </div>
      <p className="counter-message">{valueCounter > 12 ? "Valor mayor a 12" : "Es menor o igual a 12"}</p>
    </section>
  );
};

// USESTATE
// USEFFECT

