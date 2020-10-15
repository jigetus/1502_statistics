import React from "react";
import Studentcount from "./Studentcount";
import Yearpercennt from "./Yearpercent";
const Header = (props) => (
  <header>
    <Yearpercennt />
    <a href="/" className="noselect">
      <img src="/imgs/Logo_red.png" alt="logo" />
      {/* <h1>Статистика</h1> */}
    </a>
    <Studentcount />
  </header>
);
export default Header;
