import React from "react";
import "./App.css";
import { Account } from "./components/Account/Account";
import {  Route, Routes} from "react-router-dom";
import { TopicList } from "./components/TopicList/TopicList";

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Account />} />
      <Route path="/topics" element={<TopicList />} />
      </Routes>
    </div>
  );
}

export default App;
