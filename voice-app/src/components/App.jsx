import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from './Main/MainPage';
import OneLanguageTodo from './Todo/OneLanguageTodo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:language" element={<OneLanguageTodo />} />
      </Routes>
    </>
  );
}

export default App;
