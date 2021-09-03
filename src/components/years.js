import "../styles/years.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";

export function Years(props) {
  //Guardar os anos que sao usados na API
  const [years, setYears] = useState([]);
  
  //Clicar no botao para quando se clica no ano 
  const onClick = (value) => (event) => {
    //Mostrar o PopUp para escolher os anos  
    props.revenueYear(false);
    //Mostrar o botao para voltar para traz
    props.goBack(true);
    //Passar o ano escolhido 
    props.anoEscolhido(value);
  };
  //Ir buscar a API os anos 
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
      {/* PopUp com os anos */}
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
    </div>
  );
}
