import { useLowCalorieRecipe } from "../../hooks/useLowCalorieRecipe";
import Recipe from "../recipes/Recipe";

function LowCalorieRecipe() {
  const { recipes } = useLowCalorieRecipe();
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

export default LowCalorieRecipe;
