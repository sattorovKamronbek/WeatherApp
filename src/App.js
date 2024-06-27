import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <CurrentLocation />
      </div>
      <div className='footer-info'>
        <a
          href='https://kamronbek-s-portfolio-c6gm.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Created by : <span>Sattorov Kamronbek</span>
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
