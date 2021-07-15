import axios from "axios";
import { useState, useEffect } from "react";

export default function SpecificData(props) {
    const [specificMovie, setSpecificMovie] = useState(null)
    useEffect(() => {
      axios
        .get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies/',"6019683cf29db7802550f198")
        .then((res) => {
          setSpecificMovie(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    
    return {specificMovie}
  }
  SpecificData.defaultProps ={
      id:null
  }

  