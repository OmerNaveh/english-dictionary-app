import React from "react";
import axios from "axios";
export default function Word(props) {
  const searchFor = async () => {
    const searchWord = props.content.replace(/[.,!'?`"/\\;+|{}()%$@#*&^]/g, ""); //remove unwanted characters
    const searchUrl = `http://localhost:4000/${searchWord}`;
    const response = await axios.get(searchUrl);
    props.setdictionaryArr(response.data);
  };
  return (
    <span onClick={searchFor}>
      <span className="link">{props.content}</span>{" "}
    </span>
  );
}
