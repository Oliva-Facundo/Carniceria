import React, { useState } from 'react'
import { Header, Info } from './components'
function App() {

  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const handleModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <Header navOpen={openNav} onChangeNav={handleNav} modalOpen={handleModal}/>
      <Info />
    </>
  )
}

export default App
