import { useState } from "react";
import DictionaryRender from "./components/DictionaryRender";
import SearchBar from "./components/searchBar";

function App() {
  const [dictionaryArr, setdictionaryArr] = useState([]);

  return (
    <div className="App">
      <SearchBar setdictionaryArr={setdictionaryArr} />
      <DictionaryRender
        setdictionaryArr={setdictionaryArr}
        dictionaryArr={dictionaryArr}
      />
    </div>
  );
}

export default App;
