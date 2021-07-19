import DataTable from "./components/DataTable";
import "./styles/App.css";
import { Top10Revenue } from "./components/Top10Revenue";
import { useState } from "react";
import { Years } from "./components/years";
import goBack from "./imgs/Group 20082.svg";

export default function App(props) {
  //Mostrar/Esconder a Tabela com os dados todos
  const [showResults, setShowResults] = useState(true);
  //Mostrar/Esconder a tabela com o Top10
  const [showTop10, setShowTop10] = useState(false);
  //Mostrar/Esconder a Tabela com o Top10 do ano Escolhido
  const [showTop10Ano, setShowTop10Ano] = useState(true);
  //Mostrar/Esconder a Pop com anos
  const [showPopUp, setShowPopUp] = useState(false);
  //Mostrar/Esconder a imagem que deixa voltar para tras no ano
  const [showGoBack, setShowGoBack] = useState(false);
  //Mudar o texto do butao de "by year" para o ano escolhido
  const [ano, setAno] = useState(null);
  //Mudar a cor de fundo do Top 10 do Ano
  const [color, setColor] = useState("");

  //onClick do Butao Top 10 Revenue
  const onClick = () => {
    //esconder a tabela com os filmes todos
    setShowResults(false);
    //Mostrar o Top 10 revenue dos filmes
    setShowTop10(true);
    //Esconder o Top 10 revenue do Ano escolhido 
    setShowTop10Ano(false);
    //Meter a cor do botao de volta ao "normal"
    setColor("");
    //Meter o texto do botao do ano para "by Year"
    setAno("by Year")
    //Mostrar o botao para voltar a tras
    setShowGoBack(true);
  };
  
  return (
    <div id="appContent" className="App">
      <div id="rectangule"></div>
      <div id="content">
        <h1>Movie Ranking</h1>
        <div id="navBar">
          <button onClick={onClick}>Top 10 Revenue </button>
          <button
            id={color}
            onClick={() => {
              //mostrar o popup com os anos
              setShowPopUp(true);
              //Mostrar o top 10 revenue dos anos
              setShowTop10Ano(true);
              //Mudar o estilo do botao para o estilo "Clicked"
              setColor("clicked");
            }}
          >
            Top 10 Revenue {ano === null ? "By Year" : ano}
          </button>
          {showGoBack ? (<img id="goBack" alt="goBack" src={goBack} onMouseDown={() => {
            //Mostra a tabela com os dados dos anos todos 
            setShowResults(true);
            //Esconder o Top 10 dos anos 
            setShowTop10Ano(false);
            //Meter o texto do botao em "by Year"
            setAno("by Year");
            //Retirar o estilo "clicked" 
            setColor("");
            //Esconder o botao para voltar a tras
            setShowGoBack(false);
            //Esconder o top 10 revenue
            setShowTop10(false);
            }} />): (<div></div>)}

        </div>
        {showTop10Ano ? (
          <div id="popUp">
            <Years
              goBack = {setShowGoBack}
              anoEscolhido={setAno}
              resultados={setShowResults}
              top10={setShowTop10}
              revenueYear={setShowPopUp}
              trigger={showPopUp}
              setTrigger={setShowPopUp}
            />
          </div>
        ) : (
          <div></div>
        )}

        {showResults ? <DataTable /> :  <div></div> }
        {showTop10 ? <Top10Revenue /> : <div> </div>}
      </div>
    </div>
  );
}
