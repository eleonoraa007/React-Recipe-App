import { useRecipes } from "../../hooks/useRecipes";
import Recipe from "./Recipe";

function RecipeList({ onSelect }) {
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
