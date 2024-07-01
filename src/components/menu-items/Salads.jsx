import { useContext } from "react";
import { useSalads } from "../../hooks/useSalads";
import Recipe from "../recipes/Recipe";
import { PropContext } from "../../context/PropContext";

function Salads() {
  const { onSelect } = useContext(PropContext);
  const { recipes } = useSalads();
  return (
    <ul className="styled-list">
      {recipes
        ? recipes.map((recipe) => (
            <li key={recipe.id} onClick={() => onSelect(recipe.id)}>
              <Recipe recipe={recipe} />
            </li>
          ))
        : "Loading.."}
    </ul>
  );
}

export default Salads;
