import React from "react";

const Location = ({ open, handleLocation }) => {
  return (
    <div
      className={` w-full h-screen text-center absolute top-0 z-50 ${
        open ? "flex" : "hidden"
      } items-center justify-center `}
    >
      <div className="bg-white w-[30rem] min-h-[30rem] rounded-2xl p-4 shadow-[0_0_0_100vmax_rgba(0,0,0,0.3)]">
        <button
          onClick={handleLocation}
          className="relative left-[45%] text-xl py-2 px-3 rounded-full text-redPrimary hover:bg-red-100 "
        >
          <i className="ai-cross"></i>
        </button>
        <h2 className=" text-lg font-semibold">Ubicación</h2>
        <p>Jose Maria Bedoya 207</p>
        <p>Córdoba, Córdoba, Argentina</p>
        <div className="flex justify-center items-center flex-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1181.0696512983277!2d-64.18062939008192!3d-31.40000491159128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI0JzAwLjQiUyA2NMKwMTAnNDguOSJX!5e0!3m2!1ses-419!2sar!4v1706112035950!5m2!1ses-419!2sar"
            className="border-2 border-redPrimary outline-none w-full h-[18rem] mt-3"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/WBGoc5m2jQngbke79"
            target="_blank"
            rel="noreferrer"
            className=" text-blue-400 mt-3"
          >
            Ver en google maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
