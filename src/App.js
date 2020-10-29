import React from "react";
import Topleft from "./components/Topleft";
import Topright from "./components/Topright";
import Bottomleft from "./components/Bottomleft";
import Bottomright from "./components/Bottomright";
import ReactTypingEffect from "react-typing-effect";
const App = () => {
  return (
    <React.StrictMode>
      <img
        src="imgs/logo_white_small.png"
        alt="1502"
        className="logo"
        style={{ position: "absolute" }}
      />
      <ReactTypingEffect
        text={["ЛУЧШИЙ КЛАСС В ПРЕДМЕТЕ "]}
        className="bestclass_title"
        speed={40}
        eraseDelay={800000000000}
        typingDelay={0}
      />
      <Topleft />
      <Topright />
      <Bottomleft />
      <Bottomright />
    </React.StrictMode>
  );
};

export default App;
