import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../MainCont/MainCont";
import SearchBar from "../Searchbar/Searchbar";
import SearcHistory from "../SearchHistory/SearchHistory";
import { useState } from "react";

function App() {
  const [terms, setTerms] = useState(["hello there", "i have te highground"]);

  const addTerm = (term) => {
    setTerms([term, ...terms]);
  };
  return (
    // pass props and funcs to components
    <>
      <Nav />
      <SearchBar userInput={terms[0]} addTerm={addTerm} />
      <SearcHistory terms={terms} />
      <Main />
    </>
  );
}

export default App;
