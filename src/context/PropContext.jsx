import { createContext, useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { useNavigate, useParams } from "react-router-dom";

export const PropContext = createContext();

const PropProvider = ({ children }) => {
  const navigate = useNavigate();
  const { recipes } = useRecipes();
  const { id } = useParams();
  const [results, setResults] = useState([]);

  const handleSelectRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <PropContext.Provider
      value={{
        recipes,
        onSelect: handleSelectRecipe,
        results,
        setResults,
        id,
      }}
    >
      {children}
    </PropContext.Provider>
  );
};

export default PropProvider;
