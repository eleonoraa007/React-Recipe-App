import React from "react";
import Recipe from "../recipes/Recipe";

function Result({ results, onSelect }) {
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
