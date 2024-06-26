import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RecipeDisplay from "./pages/RecipeDisplay";
import LowCalorieRecipe from "./components/menu-items/LowCalorieRecipe";
import ProteinRecipes from "./components/menu-items/ProteinRecipes";
import Desserts from "./components/menu-items/Desserts";
import Salads from "./components/menu-items/Salads";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
        <Route path="calorie" element={<LowCalorieRecipe />} />
        <Route path="protein" element={<ProteinRecipes />} />
        <Route path="dessert" element={<Desserts />} />
        <Route path="salad" element={<Salads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
