import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RecipeDisplay from "./pages/RecipeDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
