import React from "react";
import LeftSide from "./components/confing-side";
import MainSide from "./components/main-side";
import { MainSideDiv } from "./styles/styled-component";
import RightSide from "./components/styling-side";
import { useSelector } from "react-redux";

function App() {
  const background = useSelector(state => state.bgColor);
  const text = useSelector(state => state.textColor);

  return (
    <main id="app">
      <LeftSide />
      <MainSideDiv
        className="main-side--wrapper"
        background={background}
        tColor={text}>
        <MainSide />
      </MainSideDiv>
      <RightSide />
    </main>
  );
}

export default App;
