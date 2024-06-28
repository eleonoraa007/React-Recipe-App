import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RecipeDisplay from "./pages/RecipeDisplay";
import ProteinRecipes from "./components/menu-items/ProteinRecipes";
import Desserts from "./components/menu-items/Desserts";
import Salads from "./components/menu-items/Salads";
import CalorieRecipes from "./components/menu-items/CalorieRecipes";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
        <Route path="calorie" element={<CalorieRecipes />} />
        <Route path="protein" element={<ProteinRecipes />} />
        <Route path="dessert" element={<Desserts />} />
        <Route path="salad" element={<Salads />} />
      </Routes>
    </>
  );
}

export default App;
