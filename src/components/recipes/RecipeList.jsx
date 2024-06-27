import { useContext } from "react";
import { useRecipes } from "../../hooks/useRecipes";
import Recipe from "./Recipe";
import { PropContext } from "../../context/PropContext";

function RecipeList() {
  const { onSelect } = useContext(PropContext);
  const { recipes } = useRecipes();

  return (
    <ul className="styled-list">
      {recipes?.map((recipe) => (
        <li key={recipe.id} onClick={() => onSelect(recipe.id)}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
export default RecipeList;
