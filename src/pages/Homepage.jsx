import { useContext } from "react";
import RecipeList from "../components/recipes/RecipeList";
import Result from "../components/search/Result";
import { PropContext } from "../context/PropContext";

function Homepage() {
  const { results } = useContext(PropContext);
  return <>{results.length ? <Result /> : <RecipeList />}</>;
}

export default Homepage;
