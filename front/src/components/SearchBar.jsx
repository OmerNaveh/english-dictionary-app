import React, { useRef } from "react";
import axios from "axios";
import "../styles/search.css";
export default function SearchBar(props) {
  const searchInput = useRef(null);
  const posInput = useRef(null);
  const searchFor = async () => {
    const word = searchInput.current.value;
    const pos = posInput.current.value;
    const searchUrl = !pos
      ? `https://kn1l85zst8.execute-api.eu-west-1.amazonaws.com/dev/${word}`
      : `https://kn1l85zst8.execute-api.eu-west-1.amazonaws.com/dev/${word}/${pos}`;
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
      <div>
        <select defaultValue="" ref={posInput}>
          <option disabled value=""></option>
          {options}
        </select>
        <button onClick={searchFor}>Search</button>
      </div>
    </div>
  );
}
