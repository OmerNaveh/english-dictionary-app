import React, { useRef } from "react";
import axios from "axios";
export default function SearchBar(props) {
  const searchInput = useRef(null);
  const posInput = useRef(null);
  const searchFor = async () => {
    const word = searchInput.current.value;
    const pos = posInput.current.value;
    const searchUrl = !pos
      ? `http://localhost:4000/${word}`
      : `http://localhost:4000/${word}/${pos}`;
    const response = await axios.get(searchUrl);
    props.setdictionaryArr(response.data);
    searchInput.current.value = "";
    posInput.current.value = null;
  };
  const posArr = [
    "n.",
    "prep.",
    "a.",
    "v.",
    "adv.",
    "p.",
    "interj.",
    "conj.",
    "pron.",
  ];
  const options = posArr.map((pos) => (
    <option key={pos} value={pos}>
      {pos}
    </option>
  ));

  return (
    <div>
      <input ref={searchInput} placeholder="Enter Word"></input>
      <select defaultValue="" ref={posInput}>
        <option disabled value="">
          --select pos--
        </option>
        {options}
      </select>
      <button onClick={searchFor}>Search</button>
    </div>
  );
}
