import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route index element={'/homePage'}></Route>
              <Route path={'/homePage'}  element={<HomePage /> }></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
