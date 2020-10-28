import React from "react";
import Topleft from "./components/Topleft";
import Topright from "./components/Topright";
import Bottomleft from "./components/Bottomleft";
import Bottomright from "./components/Bottomright";

const App = () => {
  return (
    <React.StrictMode>
      <h1 className="bestclass_title">ЛУЧШИЙ КЛАСС В ПРЕДМЕТЕ</h1>
      <Topleft />
      <Topright />
      <Bottomleft />
      <Bottomright />
    </React.StrictMode>
  );
};

export default App;
