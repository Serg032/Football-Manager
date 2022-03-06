import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Players from "./components/players/players";
import './App.css'
import TeamSelected from "./components/teamSeleted/teamSelected.jsx";
import { CssBaseline } from "@mui/material";

function App() {
  return(
  <Provider store={store}>
    <CssBaseline/>
    <main className="container">
      <h1>Football Manager</h1>
      <Players/>
      <TeamSelected/>
    </main>
  </Provider>
  )
}

export default App;
