import "./searchbar.css";
import { useState } from "react";

export default function SearchBar(props) {
  // First var then func
  // const [userInput, setInput] = useState("");

  const submitted = (e) => {
    e.preventDefault();
    // target name of form
    // setInput(e.target["custom-search"].value);
  };

  return (
    <section className="search-bar">
      <h2>Search for something interesting</h2>
      <form onSubmit={submitted}>
        <input type="text" name="custom-search" className="search-text" />
        <button className="btn-primary btn" name="search-btn">
          Search
        </button>
      </form>
      {props.userInput ? <p>You searched for {props.userInput}</p> : ""}
    </section>
  );
}
