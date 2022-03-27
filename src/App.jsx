import React from "react";
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <NavbarContainer />
      <Main />
    </div>
  );
}

export default App;
