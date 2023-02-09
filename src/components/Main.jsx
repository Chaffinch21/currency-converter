import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gl from "../components/Gl";

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path={"/"} element={<Gl />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
