import React from "react";

//Input de pesquisa de filmes
export default function Search(props) {

  const onChange = (e) => {
    props.pesquisa(e.target.value);
  };
  return (
    <div>
      <input
        id="searchBar"
        type="text"
        placeholder="Pesquisar Filmes"
        onChange={onChange}
      />
    </div>
  );
}
