import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Page from "./Pages/Page";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Page />
      </div>
    </>
  );
}

export default App;
