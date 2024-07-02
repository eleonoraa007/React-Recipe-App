import { useRecipeInfo } from "../../hooks/useRecipeInfo";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipeId }) {
  const { recipeInfo } = useRecipeInfo(recipeId);

  return (
    <>
      {recipeInfo && (
        <div>
          <div>
            <h1>{recipeInfo.title}</h1>
          </div>
          <div className={styles.amount}>
            <p>{recipeInfo?.servings} SERVING</p>
            <p>PREP {recipeInfo?.readyInMinutes} MIN</p>
            <p>${recipeInfo?.pricePerServing} RECIPE</p>
          </div>
          <div className={styles.top}>
            <div className={styles.ingredient}>
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
            </div>

            <img src={recipeInfo.image} alt={recipeInfo.title} />

            <div className={styles.instruction}>
              {recipeInfo.analyzedInstructions ? (
                recipeInfo.analyzedInstructions.map((instruction, index) => (
                  <div key={index}>
                    <h2>Instruction</h2>
                    {instruction.steps.map((step, stepIndex) => (
                      <div className={styles.steps} key={stepIndex}>
                        {step.number}. {step.step}
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default RecipeDetail;
