import { useState } from "react";
import DictionaryRender from "./components/DictionaryRender";
import SearchBar from "./components/SearchBar";

function App() {
  const [dictionaryArr, setdictionaryArr] = useState(null);

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
