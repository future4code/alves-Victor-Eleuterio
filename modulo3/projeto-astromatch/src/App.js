import { useState } from "react";
import Header from "./components/Header/Header";
import Perfil from "./components/Perfil/Perfil";
import Matches from "./components/Matches/Matches";

function App() {
  const [tela, setTela] = useState(true)

  const mudarTela = () =>{
    setTela(!tela)
  }

  const escolherTela = () => {
    switch(tela){
      case true:
        return <Perfil />
        case false:
          return <Matches />
    }
  }

  return (
    <div>
      <Header mudarTela={mudarTela}/>
      <hr />
      {escolherTela()}
    </div>
  );
}

export default App;
