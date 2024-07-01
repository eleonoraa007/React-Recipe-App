import { useContext } from "react";
import Result from "../components/search/Result";
import RecipeDetail from "../components/shared/RecipeDetail";
import { useParams } from "react-router-dom";
import { PropContext } from "../context/PropContext";

function RecipeDisplay() {
  const { id } = useParams();
  const { results } = useContext(PropContext);
  return (
    <>{results.length > 0 ? <Result /> : <RecipeDetail recipeId={id} />}</>
  );
}

export default RecipeDisplay;
