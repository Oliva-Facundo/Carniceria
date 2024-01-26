import React, { useState } from "react";
import { Header, Home } from "./components";
function App() {
  const [openNav, setOpenNav] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const handleModalInfo = () => {
    setOpenModalInfo(!openModalInfo);
  };

  const handleLocation = () => {
    setOpenLocation(!openLocation);
  };

  return (
    <>
      <Header
        navOpen={openNav}
        onChangeNav={handleNav}
        openModal={openModalInfo}
        onChangeModal={handleModalInfo}
        openLocation={openLocation}
        onChangeLocation={handleLocation}
      />
      <Home />
    </>
  );
}

export default App;
