import React, {useState} from 'react';
import Data from './Data';
import Details from './MoreDetails';
import eye from "../imgs/Path 11162.svg";
import "../styles/DataTable.css";

export default function RevenueYear(props) {
    const {movies}=Data();

    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(null);
    const onClick = (value) => (event) => {
      setId(value);
      setVisible(true);
    };
    return (
    <div id="contentTable" className="top10">
      <table id="moviesTb">
        <thead>
          <tr id="titles">
            <th>Ranking</th>
            <th>Title</th>
            <th>Year</th>
            <th>Revenue</th>
            <th></th>
          </tr>
          {
             movies
            .filter((o) => (o.year === props.year))
            .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
            .slice(0, 10)
            .map((movie) => (
            <tr id="tableContent" key={movie.id}>
              <td id="rank">{movie.rank}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td> $ {movie.revenue}</td>
              <td>
                <img alt="img" src={eye} onMouseDown={onClick(movie.id)}/>{" "}
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <Details  trigger={visible} setTrigger={setVisible} id={id} />        
    </div>
    )
}
