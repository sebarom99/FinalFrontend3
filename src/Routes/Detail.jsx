import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalStates } from "../Components/utils/Context";

const Detail = () => {
  const params = useParams();

  const [doctores, setDoctores] = useState({});
  // useEffect(() => {
  //   //Async/await con fetch
  //   const fetchData = async () => {
  //       let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  //       let doctores = await res.json()
  //       // console.log(data)
  //   }
  useEffect(() => {
    const fetchData = async () => {
      await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(
        (res) => setDoctores(res.data)
      );
    };
    fetchData();
  });

  const { tema } = useContext(GlobalStates);

  return (
    <div
      className="detail"
      style={{ background: tema.backgroundHome, color: tema.color }}
    >
      <h1>Detalles Dentista ID: {doctores.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Página Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{doctores.name}</td>
            <td>{doctores.email}</td>
            <td>{doctores.phone}</td>
            <td>{doctores.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;