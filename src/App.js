import DataTable from "./components/DataTable";
import "./styles/App.css";
import { Top10Revenue } from "./components/Top10Revenue";
import { useState } from "react";
import { Years } from "./components/years";


function App(props) {
  const [showResults, setShowResults] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [ano, setAno] = useState(null);
  const [showTop10, setShowTop10] = useState(false);
  const [showTop10Ano, setShowTop10Ano] = useState(true);

  const onClick = () => {
    setShowResults(true);
    setShowTop10(true);
    setShowTop10Ano(false);
  };

  return (
    <div id="appContent" className="App">
      <div id="rectangule"></div>
      <div id="content">
        <h1>Movie Ranking</h1>
        <div id="navBar">
          <button onClick={onClick}>Top 10 Revenue </button>
          <button onClick={() => {
            setShowPopUp(true);
            setShowTop10Ano(true);}}>
            Top 10 Revenue {ano === null ? "By Year" : ano}
          </button>
          { showTop10Ano ?(
          <div id="popUp">
            <Years
              anoEscolhido={setAno}
              resultados={setShowResults}
              top10={setShowTop10}
              revenueYear={setShowPopUp}
              trigger={showPopUp}
              setTrigger={setShowPopUp}
            />
          </div>)
         :(
          <div></div>
         ) }
        </div>
        {showResults ? <div></div> : <DataTable />}
        {showTop10 ? <Top10Revenue/> : <div> </div>}
      </div>
    </div>
  );
}

export default App;
