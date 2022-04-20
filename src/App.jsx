import React from "react";
import s from './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main/Main";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <div className={s.app_wrapper}>
      <HeaderContainer />
      <NavbarContainer />
      <Main />
    </div>
  );
}

export default App;
