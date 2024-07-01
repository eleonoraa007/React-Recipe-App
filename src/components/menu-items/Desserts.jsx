import { useContext } from "react";
import { useDesserts } from "../../hooks/useDesserts";
import Recipe from "../recipes/Recipe";
import { PropContext } from "../../context/PropContext";

function Desserts() {
  const { onSelect } = useContext(PropContext);
  const { recipes } = useDesserts();
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

export default Desserts;
