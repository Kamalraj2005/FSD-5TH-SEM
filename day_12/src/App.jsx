import React from "react";

import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app" id="home">
      <Header />

      <main>
        <Product />
      </main>

      <Footer />
    </div>
  );
}

export default App;
