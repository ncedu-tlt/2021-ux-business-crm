import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "../header/header.components";

const App = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route to={"/"} element={<MainPage />}></Route>
         </Routes>
      </div>
   )
}

const MainPage = () => {
   return "MainPage"
}

export default App