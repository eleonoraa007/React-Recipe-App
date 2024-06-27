import { useCalorieRecipes } from "../../hooks/useCalorieRecipes";
import Recipe from "../recipes/Recipe";

function CalorieRecipes() {
  const { recipes } = useCalorieRecipes();
  return (
    <ul className="styled-list">
      {recipes
        ? recipes.map((recipe) => (
            <li key={recipe.id}>
              <Recipe recipe={recipe} />
            </li>
          ))
        : "Loading.."}
    </ul>
  );
}

export default CalorieRecipes;
