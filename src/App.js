import DataTable from "./components/DataTable";
import "./styles/App.css";
import { Top10Revenue } from "./components/Top10Revenue";
import { useState } from "react";
import { Years } from "./components/years";
import goBack from "./imgs/Group 20082.svg";

function App(props) {
  //Mostrar/Esconder a Tabela com os dados todos
  const [showResults, setShowResults] = useState(false);
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
    setShowResults(true);
    setShowTop10(true);
    setShowTop10Ano(false);
    setColor("");
    setShowGoBack(false);
    setAno("by Year")
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
              setShowPopUp(true);
              setShowTop10Ano(true);
              setColor("clicked");
            }}
          >
            Top 10 Revenue {ano === null ? "By Year" : ano}
          </button>
          {showGoBack ? (<img id="goBack" alt="goBack" src={goBack} onMouseDown={() => {
            setShowResults(false);
            setShowTop10Ano(false)
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

        {showResults ? <div></div> : <DataTable />}
        {showTop10 ? <Top10Revenue /> : <div> </div>}
      </div>
    </div>
  );
}

export default App;
