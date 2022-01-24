import React from "react";
import axios from "axios";
import "../styles/word.css";
export default function Word(props) {
  const searchFor = async () => {
    const searchWord = props.content.replace(/[.,!'?`"/\\;+|{}()%$@#*&^]/g, ""); //remove unwanted characters
    const searchUrl = `https://kn1l85zst8.execute-api.eu-west-1.amazonaws.com/dev/${searchWord}`;
    const response = await axios.get(searchUrl);
    props.setdictionaryArr(response.data);
  };
  return (
    <span onClick={searchFor}>
      <span className="link">{props.content}</span>{" "}
    </span>
  );
}
