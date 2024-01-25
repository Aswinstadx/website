import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import GalleryScreen from "./Screens/GalleryScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
