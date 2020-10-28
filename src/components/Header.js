import React from "react";
import Navigation from "./Navigation";
const Header = (props) => (
  <header>
    <a href="/" className="noselect">
      <img src="/imgs/Logo_white_small.png" alt="logo" />
      <h1>1502</h1>
    </a>
    <Navigation />
  </header>
);
export default Header;
