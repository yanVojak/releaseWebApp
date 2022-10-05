import React, { useEffect, useMemo } from "react";
import "./App.css";
import { Account } from "./components/Account/Account";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ChangePracticeLanguage } from "./components/LanguageList/ChangeLanguage";
import { LevelList } from "./components/LevelList/LevelList";
import MainRouter from "./routing/MainRouter/MainRouter";

function App() {
  const navigate = useNavigate();
  const routing = useMemo(() => {
    return <MainRouter />
  }, [])

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      {routing}
      {/* <ChangePracticeLanguage /> */}
      {/* <br /> */}
      {/* <LevelList changeLevel={() => {}} /> */}
    </div>
  );
}

export default App;
