import styled from "styled-components";
import { useRecipes } from "../../hooks/useRecipes";
import Recipe from "./Recipe";

const ListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem;
`;

function RecipeList() {
  const { recipes } = useRecipes();

  return (
    <ListStyle>
      {recipes?.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </ListStyle>
  );
}
export default RecipeList;
