import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DateAndTime } from "./components/DateAndTime/DateAndTime";
import { Account } from "./components/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LanguagePracticeList } from "./components/LanguageInterfaceList/LanguageInterfaceList";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/account");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LanguagePracticeList onChangeLanguage={() => {}} />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/date" element={<DateAndTime changeDate={() => {}} />} />
      </Routes>
    </div>
  );
}

export default App;
