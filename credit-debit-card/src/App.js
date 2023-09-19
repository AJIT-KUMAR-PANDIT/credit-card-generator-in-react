import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body";
import FrontCardPos from "./components/Card/FrontCardPos";
import BackCardPos from "./components/Card/BackCardPos";
import React, { useState } from 'react';
import Form from "./components/Form/Form";


function App() {
  return (
    <>
      <div className="BodyPos">
        <Body />
      </div>
      <div className="FrontCardPos">
        <FrontCardPos />
      </div>
      <div className="BackCardPos">
        <BackCardPos />
      </div>
      <div className="Cent_er">
        <Form />
      </div>
    </>
  );
}

export default App;
