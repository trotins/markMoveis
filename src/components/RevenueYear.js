// import React, { useEffect, useState } from "react";
// import Details from './MoreDetails';
// import eye from "../imgs/Path 11162.svg";
// import "../styles/DataTable.css";
// import axios from "axios";

// export default function RevenueYear(props) {
//     State onde guarda os dados da API
//     Dar display/hide ao popup dos detalhes
//     const [visible, setVisible] = useState(false);
//     Enviar o ID do filme
//     const [id, setId] = useState(null);
//     const [movies, setMovies] = useState([]);
//     Acao de clicar no "eye" que passa o id do filme e da display dos detalhes
//     const onClick = (value) => (event) => {
//       setId(value);
//       setVisible(true);
//     };
//     const [top10Year, setTop10Year] = useState([]);
    
//     useEffect(() => {
//         axios
//           .get("http://movie-challenge-api-xpand.azurewebsites.net/api/movies")
//           .then((res) => {
//             setTop10Year(
//               movies
//                 .filter((o) => o.year === props.year)
//                 .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
//                 .slice(0, 10)
//             )
//             setMovies(res.data.content);    
//           })
          
//           .catch((err) => {
//             console.log(err);
//           });
//       }, [movies,props.year]);
    
//     Tabela com os filmes do Ano escolhido 
//     return (
//     <div id="contentTable" className="top10">
//       <table id="moviesTb">
//         <thead>
//           <tr id="titles">
//             <th>Ranking</th>
//             <th>Title</th>
//             <th>Year</th>
//             <th>Revenue</th>
//             <th></th>
//           </tr>
//           {
//             top10Year
//             .map((movie) => (
//             <tr id="tableContent" key={movie.id}>
//               <td id="rank">{movie.rank}</td>
//               <td>{movie.title}</td>
//               <td>{movie.year}</td>
//               <td> $ {movie.revenue}</td>
//               <td>
//                 <img alt="img" src={eye} onMouseDown={onClick(movie.id)}/>{" "}
//               </td>
//             </tr>
//           ))}
//         </thead>
//       </table>
//       <Details  trigger={visible} setTrigger={setVisible} id={id} />        
//     </div>
//     )
// }
