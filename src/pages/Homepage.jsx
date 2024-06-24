import { useState } from "react";
import NavBar from "../components/NavBar";
import RecipeList from "../components/recipes/RecipeList";
import Result from "../components/search/Result";

function Homepage() {
  const [results, setResults] = useState([]);
  return (
    <>
      <NavBar setResults={setResults} />
      {results.length ? <Result results={results} /> : <RecipeList />}
    </>
  );
}

export default Homepage;
