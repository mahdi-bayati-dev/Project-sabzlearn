import React from "react";
import "./Header.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";

function Header() {
  return (
    <>
      <header class="header">
            <TopBar/>
            <NavBar/>
            <Landing/>

        
      </header>
    </>
  );
}

export default Header;
