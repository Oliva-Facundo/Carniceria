import React from "react";

const Info = ({ visible, handleModal }) => {
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
      className={`w-full h-screen text-center ${
        visible ? "flex" : "hidden"
      } items-center justify-center absolute top-0 z-50 `}
    >
      <div className="bg-white p-6 shadow-[0_0_0_100vmax_rgba(0,0,0,0.3)] rounded-2xl max-sm:m-5">
        <button
          onClick={handleModal}
          className="relative left-[45%] text-xl py-2 px-3 rounded-full text-redPrimary hover:bg-red-100 "
        >
          <i className="ai-cross"></i>
        </button>
        <div className="flex flex-col gap-4">
          <h2 className=" text-lg font-semibold">Horarios</h2>
          <div>
            {horarios.map((horario, index) => (
              <p key={index}>{horario.text}</p>
            ))}
          </div>
          <h2 className=" text-lg font-semibold">Contacto</h2>
          <div className="flex flex-col">
            <a className=" cursor-pointer text-green-400">
              <i className="ai-whatsapp-fill"></i> +545555555555{" "}
            </a>
            <a className=" cursor-pointer text-sky-400">
              <i className="ai-phone"></i> +546666666666{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
