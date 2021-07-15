
import React, { useState } from "react";
import eye from "../imgs/Path 11162.svg";
import "../styles/DataTable.css";
import Data from "./Data";
import Details from "./MoreDetails";

//http://movie-challenge-api-xpand.azurewebsites.net
export default function DataTable(props) {
  const { movies } = Data();
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);
  const onClick = (value) => (event) => {
    setId(value);
    setVisible(true);
  };
  
  // tabela com os dados de todos os filmes da API
  return (
    <div id="contentTable" className="data">
      <table id="moviesTb">
        <thead>
          <tr id="titles">
            <th>Ranking</th>
            <th>Title</th>
            <th>Year</th>
            <th>Revenue</th>
            <th></th>
          </tr>
          {movies.map((movie) => (
            <tr id="tableContent" key={movie.id}>
              <td id="rank">{movie.rank}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td> $ {movie.revenue}</td>
              <td>
                <img alt="img" src={eye} onMouseDown={onClick(movie.id)} />{" "}
              </td>
            </tr>
          ))}
        </thead>
      </table>
      {/* PopUp com os detalhes especificos do filme */}
        <Details  trigger={visible} setTrigger={setVisible} id={id} />
    </div>
  );
}
