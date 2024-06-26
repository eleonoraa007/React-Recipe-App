import { useSalads } from "../../hooks/useSalads";
import Recipe from "../recipes/Recipe";

function Salads() {
  const { recipes } = useSalads();
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

export default Salads;
