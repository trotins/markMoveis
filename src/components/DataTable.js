import React, { useEffect, useState } from "react";
import eye from "../imgs/Path 11162.svg";
import "../styles/DataTable.css";
import Details from "./MoreDetails";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

//http://movie-challenge-api-xpand.azurewebsites.net
export default function DataTable(props) {
  //Aceder aos dados da APi
  const [movies, setMovies] = useState([]);
  //Top 10 dos filmes
  const [top10Movies, setTop10Movies] = useState([]);
  //Dados da tabela dos anos
  const [top10Year, setTop10Year] = useState([]);
  //Dar display/hide ao popup dos detalhes
  const [visible, setVisible] = useState(false);
  //Enviar o ID do filme
  const [id, setId] = useState(null);

  const [size, setSize] = useState(1000);
  const onClick = (value) => (event) => {
    setId(value);
    setVisible(true);
  };

  useEffect(() => {
    axios
      .get(
        "http://movie-challenge-api-xpand.azurewebsites.net/api/movies?page=" +
          0 +
          "&size=" +
          size
      )
      .then((res) => {
        setTop10Movies(
          movies.sort((a, b) => (a.revenue < b.revenue ? 1 : -1)).slice(0, 10)
        );
        setTop10Year(
          movies
            .filter((o) => o.year === props.year)
            .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
            .slice(0, 10)
        );
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movies, props.year, size]);

  const renderSwitch = (param) => {
    switch (param) {
      case "yearsTable":
        return top10Year.map((movie) => (
          <tr id="tableContent" key={movie.id}>
            <td id="rank">{movie.rank}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td> $ {movie.revenue}</td>
            <td>
              <img alt="img" src={eye} onMouseDown={onClick(movie.id)} />{" "}
            </td>
          </tr>
        ));
      case "top10Movies":
        return top10Movies.map((movie) => (
          <tr id="tableContent" key={movie.id}>
            <td id="rank">{movie.rank}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td> $ {movie.revenue}</td>
            <td>
              <img alt="img" src={eye} onMouseDown={onClick(movie.id)} />{" "}
            </td>
          </tr>
        ));
      default:
        return movies.map((movie) => (
          <tr id="tableContent" key={movie.id}>
            <td id="rank">{movie.rank}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td> $ {movie.revenue}</td>
            <td>
              <img alt="img" src={eye} onMouseDown={onClick(movie.id)} />{" "}
            </td>
          </tr>
        ));
    }
  };
  const fetchMoreData = () => {
   setSize(size+5);
  };
  return (
    <div>
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
            {/* <InfiniteScroll
              dataLength={movies.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollableTarget="contentTable"
              className="infiniteScroll"
            > */}
              {renderSwitch(props.selectedTable)}
            {/* </InfiniteScroll> */}
          </thead>
        </table>
        {/* PopUp com os detalhes especificos do filme */}
        <Details trigger={visible} setTrigger={setVisible} id={id}  />
      </div>
    </div>
  );
}
