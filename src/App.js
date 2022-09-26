import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
       <About></About>
       <Portfolio></Portfolio>
       <Resume></Resume>
       <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
