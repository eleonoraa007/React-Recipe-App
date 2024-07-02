import styled from "styled-components";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 290px;
  width: 315px;
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
