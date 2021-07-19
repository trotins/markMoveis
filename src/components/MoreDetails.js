import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DataTable.css";
import PopUp from "./PopUp";
import separater from "../imgs/Line 303.svg";

//http://movie-challenge-api-xpand.azurewebsites.net

export default function Details(props) {
  //Estado onde guarda os dados especificos de cada filme
  const [specificMovie, setSpecificMovie] = useState("null");
  //consumir a API para puder ver dados especificos de cada filme (ideal por isto em outro componente)
  useEffect(() => {
    axios
      .get(
        `http://movie-challenge-api-xpand.azurewebsites.net/api/movies/${props.id}`
      )
      .then((res) => {
        setSpecificMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <div>
      {/* PopUp para ver mais detalhes dos filmes */}
      <PopUp trigger={props.trigger} setTrigger={props.setTrigger}>  
        <ul id="moreDetais">
          <h1> {specificMovie.title} </h1>
          <img id="separater" alt="separater" src={separater} />
          <li id="title">Year</li>
          <li id="specificContent">{specificMovie.year}</li>
          <li id="title">Genre</li>
          <li id="specificContent">{specificMovie.genre}</li>
          <li id="title">Description</li>
          <li id="specificContent">{specificMovie.description}</li>
          <div id="actDirec">
            <table id="">
              <tr>
                <th id="title"> Director</th>
                <th id="title" className="actors">
                  {" "}
                  Actores
                </th>
              </tr>
              <tr>
                <td id="directact"> {specificMovie.director} </td>
                <td id="directact" className="actors">
                  {" "}
                  {specificMovie.actors}{" "}
                </td>
              </tr>
            </table>
          </div>
          <li id="title">RunTime</li>
          <li id="specificContent">{specificMovie.runtime}</li>
          <li id="title">Rating</li>
          <li id="specificContent">{specificMovie.rating}</li>
          <li id="title">Votes</li>
          <li id="specificContent">{specificMovie.votes}</li>
          <li id="title">Revenue</li>
          <li id="specificContent">${specificMovie.revenue}</li>
          <li id="title">Metascore</li>
          <li id="specificContent">{specificMovie.metascore}</li>
        </ul>
      </PopUp>
    </div>
  );
}
