import React from "react";
import LeftSide from "./components/confing-side";
import MainSide from "./components/main-side";
import RightSide from "./components/styling-side";

function App() {
  return (
    <main id="app">
      <LeftSide />
      <MainSide />
      <RightSide />
    </main>
  );
}

export default App;
