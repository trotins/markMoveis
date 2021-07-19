import React, { useState } from "react";
import eye from "../imgs/Path 11162.svg";
import "../styles/DataTable.css";
import Data from "./Data";
import Details from "./MoreDetails";
import Search from "./Search";

//http://movie-challenge-api-xpand.azurewebsites.net
export default function DataTable(props) {
  //Aceder aos dados da APi
  const { movies } = Data();
  //Dar display/hide ao popup dos detalhes
  const [visible, setVisible] = useState(false);
  //Enviar o ID do filme
  const [id, setId] = useState(null);
  //Filtrar o texto da input box para o search
  const [search, setSearch] = useState("");
  //Acao de clicar no "eye" que passa o id do filme e da display dos detalhes
  const onClick = (value) => (event) => {
    setId(value);
    setVisible(true);
  };

  //Filtro para pesquisar os filmes
  let moviesFiltrados = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search) !== -1;
  });
  
  return (
    <div>
      {/* Input de pesquisa dos filmes */}
      <Search pesquisa = {setSearch} />
      {/* tabela com os dados de todos os filmes da API */}
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
            {moviesFiltrados.map((movie) => (
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
        <Details trigger={visible} setTrigger={setVisible} id={id} />
      </div>
    </div>
  );
}
