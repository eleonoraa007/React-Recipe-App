import { useContext } from "react";
import { useProteinRecipe } from "../../hooks/useProteinRecipes";
import Recipe from "../recipes/Recipe";
import { PropContext } from "../../context/PropContext";

function ProteinRecipes() {
  const { onSelect } = useContext(PropContext);
  const { recipes } = useProteinRecipe();
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

export default ProteinRecipes;
