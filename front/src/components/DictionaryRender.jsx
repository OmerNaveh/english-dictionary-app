import React from "react";
import Word from "./Word";

export default function DictionaryRender({ dictionaryArr, setdictionaryArr }) {
  return dictionaryArr.map((dict) => {
    if (!dict) return <div>Try searching for a word</div>;
    if (dict.length === 0) return <div>Could not find word!</div>;
    return (
      <div>
        <h3>{dict.word}</h3>
        <p>{dict.pos}</p>
        {dict.definitions.map((def) => {
          const slicedDef = def.split(" ");
          return (
            <div>
              {slicedDef.map((word) => (
                <Word contnet={word} setdictionaryArr={setdictionaryArr} />
              ))}
            </div>
          );
        })}
      </div>
    );
  });
}
