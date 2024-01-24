import React from "react";

const Info = ({ modal, handleModal }) => {
  const horarios = [
    { text: "Lunes: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM" },
    { text: "Martes: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM." },
    { text: "Miércoles: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM." },
    { text: "Jueves: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM." },
    { text: "Viernes: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM." },
    { text: "Sábado: de 08:30AM a 13:30PM y de 17:30PM a 21:30PM." },
  ];

  return (
    <div
      className={`w-full h-screen backdrop-blur-lg ${
        modal ? "flex" : "hidden"
      } items-center justify-center absolute top-0 z-50 `}
    >
      <div className="bg-white p-6 rounded-2xl">
        <button onClick={handleModal}>
          <i className="ai-cross"></i>
        </button>
        <h2>Horarios</h2>
        {horarios.map((horario, index) => (
          <p key={index}>{horario.text}</p>
        ))}
        <h2>Contacto</h2>
        <a>
          <i>icon</i> +545555555555{" "}
        </a>
        <a>
          <i>icon2</i> +546666666666{" "}
        </a>
      </div>
    </div>
  );
};

export default Info;
