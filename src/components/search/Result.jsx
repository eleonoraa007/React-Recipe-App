import React from "react";
import Recipe from "../recipes/Recipe";
import styled from "styled-components";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem;
`;

function Result({ results }) {
  return (
    <div>
      {results
        ? results.map((recipe) => (
            <Style key={recipe.id}>
              <Recipe recipe={recipe} />
            </Style>
          ))
        : "Loading..."}
    </div>
  );
}

export default Result;
