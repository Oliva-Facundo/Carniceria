import React, { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header>
      <div className="icon"></div>
      <nav className="flex items-center justify-between">
        <button onClick={handleOpenNav}>
            
        </button>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Informacion</a>
          </li>
          <li>
            <a href="">Ubicacion</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
