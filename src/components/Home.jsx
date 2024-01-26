import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <main className=" flex justify-center">
      <div className="grid items-center justify-center gap-8 p-6 mt-16 sm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card rute="" text="Ofertas y Combos" bgImg="" />
        <Card rute="" text="Carne de Ternera" bgImg="" />
        <Card rute="" text="Carne de Cerdo" bgImg="" />
        <Card rute="" text="Carne de Pollo" bgImg="" />
        <Card rute="" text="Congelados" bgImg="" />
        <Card rute="" text="Elaborados" bgImg="" />
        <Card rute="" text="Embutidos" bgImg="" />
        <Card rute="" text="Chacinados" bgImg="" />
        <Card rute="" text="Achuras" bgImg="" />
        <Card rute="" text="Vinos, Quesos y Sales" bgImg="" />
        <Card rute="" text="Carbón y Leña" bgImg="" />
        <Card rute="" text="¡Hablanos por WhatsApp si no encontras lo que buscas!" bgImg="" />
      </div>
    </main>
  );
};

export default Home;
