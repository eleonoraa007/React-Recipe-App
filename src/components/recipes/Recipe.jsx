import styled from "styled-components";

const ContainerStyle = styled.div`
  place-content: center;
  padding: 1rem;
`;

const TitleStyle = styled.h3`
  padding: 0rem 1rem 1rem;
`;

function Recipe({ recipe }) {
  return (
    <ContainerStyle>
      <TitleStyle>{recipe.title}</TitleStyle>

      <img src={recipe.image} alt={recipe.title} />
    </ContainerStyle>
  );
}
export default Recipe;
