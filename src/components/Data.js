import axios from "axios";
import { useState, useEffect } from "react";

export default function Data() {
  //State onde guarda os dados da API
  const [movies, setMovies] = useState([]);
  //Hook que serve para ler os dados da API 
  useEffect(() => {
    axios
      .get("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => {
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //Devolve o state para puder ser usado em outros componentes  
  return { movies };
}



