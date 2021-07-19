import "../styles/years.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import RevenueYear from "./RevenueYear";
import PopUp from "./PopUp";

export function Years(props) {
  //Guardar os anos que sao usados na API
  const [years, setYears] = useState([]);
  //Enviar o ID do filme
  const [id, setId] = useState(null);
  //Dar display/hide ao popup dos detalhes
  const [visible, setVisible] = useState(false);
  //Clicar no botao para quando se clica no ano 
  const onClick = (value) => (event) => {
    //Passar o Id do filme
    setId(value);
    //Mostrar os detalhes
    setVisible(true);
    //Mostrar o PopUp para escolher os anos  
    props.revenueYear(false);
    //Mostrar os resultados
    props.resultados(false);
    //Esconder a tabela top 10
    props.top10(false);
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
       {visible ?  (       
        <div>
          {/* Tabela com os dados do ano escolhido */}
          <RevenueYear year={id} />
        </div>
       ):(<div> </div> ) }
    </div>
  );
}
