import { useState } from "react";
import Header from "./components/Header/Header";
import Header2 from "./components/Header/Header2";
import Perfil from "./components/Perfil/Perfil";
import Matches from "./components/Matches/Matches";
import styled from "styled-components";

const DivPrincipal = styled.div`
  position: fixed;
  border-radius: 50px;
  border: solid gray 1px;
  box-shadow: 3px 3px 5px black;
  left:50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  align-items: center;
  background-color: #dec8e798;
  width: 370px;
  height: 550px;
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

function App() {
  const [tela, setTela] = useState(true)

  const mudarTela = () => {
    setTela(!tela)
  }

  const escolherTela = () => {
    switch (tela) {
      case true:
        return (
          <>
            <Header mudarTela={mudarTela} />
            <Perfil />
          </>
        )
      case false:
        return (
          <>
            <Header2 mudarTela={mudarTela} />
            <Matches />
          </>
        )

    }
  }

  return (
    <DivPrincipal>
      {escolherTela()}
    </DivPrincipal>
  );
}

export default App;
