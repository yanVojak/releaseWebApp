import React, { useEffect } from "react";
import "./App.css";
import { Account } from "./components/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ChangePracticeLanguage } from "./components/ChangeLanguage/ChangeLanguage";
import { LevelList } from "./components/LevelList/LevelList";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/account");
  }, []);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Account />} />
        <Route path="account" element={<Account />} />
      </Routes>
      <ChangePracticeLanguage />
      <br />
      <LevelList changeLevel={() => {}} />
    </div>
  );
}

export default App;
