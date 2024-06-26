import { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import RecipeList from "../components/recipes/RecipeList";
import Result from "../components/search/Result";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSelectRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <>
      <NavBar setResults={setResults} />
      {results.length ? (
        <Result results={results} onSelect={handleSelectRecipe} />
      ) : (
        <RecipeList onSelect={handleSelectRecipe} />
      )}
    </>
  );
}

export default Homepage;
