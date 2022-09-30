import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [window, setWindow] = useState("about");
  //itemSelected function changes state and style of heading
  function itemSelected(newState) {
    switch (newState) {
      case "portfolio":
        setWindow("portfolio");
        renderPage()
        break;
      case "contact":
        setWindow("contact");
        renderPage()
        break;
      case "resume":
        setWindow("resume");
        renderPage()
        break;
      default:
        setWindow("about");
        renderPage()
    }
  }

  //renderPage function actually renders the content according to the state set
  const renderPage = () => {
    console.log(window)
    console.log('rendering page')
    switch (window) {
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header window={window} itemSelected={itemSelected}></Header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
