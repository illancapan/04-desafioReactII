import React from "react";

const AgregarBoton = ({ onClick }) => {
  return (
    <>
      <button className="btn btn-success" onClick={onClick}>
        Añadir
      </button>
    </>
  );
};

export default AgregarBoton;
