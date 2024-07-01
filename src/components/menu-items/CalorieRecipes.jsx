import { useContext } from "react";
import { useCalorieRecipes } from "../../hooks/useCalorieRecipes";
import Recipe from "../recipes/Recipe";
import { PropContext } from "../../context/PropContext";

function CalorieRecipes() {
  const { onSelect } = useContext(PropContext);
  const { recipes } = useCalorieRecipes();
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

export default CalorieRecipes;
