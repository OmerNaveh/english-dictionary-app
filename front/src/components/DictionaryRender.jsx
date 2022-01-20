import React from "react";
import Word from "./Word";
import "../styles/output.css";
export default function DictionaryRender({ dictionaryArr, setdictionaryArr }) {
  if (!dictionaryArr) return <div>Try searching for a word</div>;
  if (dictionaryArr.length === 0) return <div>Could not find word!</div>;
  return dictionaryArr.map((dict) => (
    <div key={dict.definitions[0]}>
      <h3>{dict.word}</h3>
      <p className="pos">{dict.pos}</p>
      {dict.definitions.map((def) => {
        const slicedDef = def.split(" ");
        return (
          <div>
            {slicedDef.map((word) => (
              <Word content={word} setdictionaryArr={setdictionaryArr} />
            ))}
          </div>
        );
      })}
    </div>
  ));
}
