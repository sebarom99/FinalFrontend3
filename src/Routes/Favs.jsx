import React from "react";
import { useContext, useState } from "react";
import Card from "../Components/Card";
import { GlobalStates } from "../Components/utils/Context";

const Favs = () => {
  const { tema } = useContext(GlobalStates);

  const [Favs] = useState(JSON.parse(localStorage.getItem("favs") || "[]"));

  return (
    <div
      className="favs"
      style={{ background: tema.backgroundHome, color: tema.color }}
    >
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {Favs?.map((doctores) => {
          return (
            <Card key={doctores.id} id={doctores.id} name={doctores.name} username={doctores.username}/>
          );
        })}
      </div>
    </div>
  );
};

export default Favs;
