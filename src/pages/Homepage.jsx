import NavBar from "../components/NavBar";
import RecipeDetail from "../components/RecipeDetail";
import RecipeList from "../components/recipes/RecipeList";

function Homepage() {
  return (
    <>
      <NavBar />
      <RecipeList />
      <RecipeDetail />
    </>
  );
}

export default Homepage;
