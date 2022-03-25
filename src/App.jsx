import React from "react";
import s from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
