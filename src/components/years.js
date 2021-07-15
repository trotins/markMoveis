import "../styles/years.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RevenueYear from "./RevenueYear";
import PopUp from "./PopUp";

export function Years(props) {
  const [years, setYears] = useState([]);
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const onClick = (value) => (event) => {
    setId(value);
    console.log(id);
    setVisible(true);
    props.revenueYear(false);
    props.resultados(true);
    props.top10(false);
    props.anoEscolhido(value);
  };

  useEffect(() => {
    axios
      .get("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => {
        setYears((prevYear) => {
          return [
            ...new Set([
              ...prevYear,
              ...res.data.content
                .sort((a, b) => (a.year < b.year ? 1 : -1))
                .map((y) => y.year),
            ]),
          ];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>   
        <PopUp trigger={props.trigger} setTrigger={props.setTrigger}>
          <div id="years">
            <ul>
              <li className="selectYear">Select a year</li>
              {years.map((year) => (
                <li key={year} className="year" onMouseDown={onClick(year)}>
                  {year}
                </li>
              ))}
            </ul>
          </div>
        </PopUp>
       {visible ?  (       
        <div>
          <RevenueYear year={id} />
        </div>
       ):(<div> </div> ) }
    </div>
  );
}
