// import React, { useState } from "react";
// import eye from "../imgs/Path 11162.svg";
// import "../styles/DataTable.css";
// import Data from "./Data";
// import Details from "./MoreDetails";

// export function Top10Revenue() {
//     //State onde guarda os dados da API
//     const {movies}=Data();
//     //Dar display/hide ao popup dos detalhes
//     const [isDetailsVisible, setisDetailsVisible] = useState(false);
//     //Enviar o ID do filme
//     const [id, setId] = useState(null);
//     //Acao de clicar no "eye" que passa o id do filme e da display dos detalhes
//     const showMovieDetails = (value) => (event) => {
//       setId(value);
//       setisDetailsVisible(true);
//     };
//     //Tabela com o top 10 dos filmes com mais revenue
//   return (
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
//              movies
//             .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
//             .slice(0, 10)
//             .map((movie) => (
//             <tr id="tableContent" key={movie.id}>
//               <td id="rank">{movie.rank}</td>
//               <td>{movie.title}</td>
//               <td>{movie.year}</td>
//               <td> $ {movie.revenue}</td>
//               <td>
//                 <img alt="img" src={eye} onMouseDown={showMovieDetails(movie.id)}/>{" "}
//               </td>
//             </tr>
//           ))}
//         </thead>
//       </table>
//       <Details  trigger={isDetailsVisible} setTrigger={setisDetailsVisible} id={id} />        
//     </div>
//   );
//   };
  

