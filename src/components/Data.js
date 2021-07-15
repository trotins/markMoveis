import axios from "axios";
import { useState, useEffect } from "react";

export default function Data() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
      .then((res) => {
        setMovies(res.data.content);
        //console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { movies };
}



