import { useDesserts } from "../../hooks/useDesserts";
import Recipe from "../recipes/Recipe";

function Desserts() {
  const { recipes } = useDesserts();
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

export default Desserts;
