import RecipeDetail from "../components/RecipeDetail";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Result from "../components/search/Result";

function RecipeDisplay() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  return (
    <>
      <NavBar setResults={setResults} />
      {/* <RecipeDetail recipeId={id} /> */}
      {results.length ? (
        <Result results={results} />
      ) : (
        <RecipeDetail recipeId={id} />
      )}
    </>
  );
}

export default RecipeDisplay;
