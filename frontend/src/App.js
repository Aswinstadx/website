import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />

      <Portfolio />
    </div>
  );
}

export default App;
