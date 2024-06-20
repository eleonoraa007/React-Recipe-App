import styled from "styled-components";
import { useRecipeInfo } from "../hooks/useRecipeInfo";

const TopStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;

const ImageStyle = styled.img`
  width: 400px;
`;

const Style = styled.p`
  padding: 0.6rem 1rem;
  background-color: #6f78b9;
  color: white;
  border-radius: 30px;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 13px;
`;

const AmountStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 1rem 2rem;
`;

const IngredientStyle = styled.div`
  box-sizing: border-box;
  margin-left: 1rem;
  padding: 2rem;
  border: 1px solid #e4dbe4;
  background-color: #e5e2e5;
  color: #1f1722;
  border-radius: 20px;
`;

const InstructionStyle = styled.div`
  margin: 2rem;
`;

const StepStyle = styled.p`
  padding: 1px;
  margin-top: 1rem;
`;

function RecipeDetail() {
  const { recipeInfo } = useRecipeInfo(715415);

  return (
    <>
      {recipeInfo && (
        <div className="recipe-detail">
          <div className="title">
            <h1>{recipeInfo.title}</h1>
          </div>
          <AmountStyle>
            <Style>{recipeInfo.servings} SERVING</Style>
            <Style>PREP {recipeInfo.readyInMinutes} MIN</Style>
            <Style>${recipeInfo.pricePerServing} RECIPE</Style>
          </AmountStyle>
          <TopStyle>
            <IngredientStyle>
              <h3>Ingredients</h3>
              <ul>
                {recipeInfo.extendedIngredients ? (
                  recipeInfo.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>
                      <strong>{ingredient.nameClean}</strong> -{" "}
                      {ingredient.amount} {ingredient.unit}
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </IngredientStyle>
            <div className="image">
              <ImageStyle src={recipeInfo.image} alt={recipeInfo.title} />
            </div>
          </TopStyle>
          <div className="preparation-details">
            <InstructionStyle>
              {recipeInfo.analyzedInstructions ? (
                recipeInfo.analyzedInstructions.map((instruction, index) => (
                  <div key={index}>
                    <h2>Instruction</h2>
                    {instruction.steps.map((step, stepIndex) => (
                      <StepStyle key={stepIndex}>
                        {step.number}. {step.step}
                      </StepStyle>
                    ))}
                  </div>
                ))
              ) : (
                <></>
              )}
            </InstructionStyle>
          </div>
        </div>
      )}
    </>
  );
}
export default RecipeDetail;
