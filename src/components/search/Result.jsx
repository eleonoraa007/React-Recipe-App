import React, { useContext } from "react";
import Recipe from "../recipes/Recipe";
import { PropContext } from "../../context/PropContext";

function Result() {
  const { results, onSelect } = useContext(PropContext);
  return (
    <ul className="styled-list">
      {results
        ? results.map((recipe) => (
            <li key={recipe.id} onClick={() => onSelect(recipe.id)}>
              <Recipe recipe={recipe} />
            </li>
          ))
        : "Loading..."}
    </ul>
  );
}

export default Result;
