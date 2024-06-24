import styled from "styled-components";

const ContainerStyle = styled.div`
  place-content: center;
  padding: 1rem;
`;

function Recipe({ recipe }) {
  return (
    <ContainerStyle>
      <h3>{recipe.title}</h3>

      <img src={recipe.image} alt={recipe.title} />
    </ContainerStyle>
  );
}
export default Recipe;
