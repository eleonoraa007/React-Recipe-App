import { useProteinRecipe } from "../../hooks/useProteinRecipes";
import Recipe from "../recipes/Recipe";

function ProteinRecipes() {
  const { recipes } = useProteinRecipe();
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

export default ProteinRecipes;
