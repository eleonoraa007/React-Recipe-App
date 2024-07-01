import { createContext, useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { useNavigate } from "react-router-dom";

export const PropContext = createContext();

const PropProvider = ({ children }) => {
  const navigate = useNavigate();
  const { recipes } = useRecipes();
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const handleSelectRecipe = (id) => {
    navigate(`/recipe/${id}`);
    setInput("");
    setResults([]);
  };

  return (
    <PropContext.Provider
      value={{
        recipes,
        onSelect: handleSelectRecipe,
        results,
        setResults,
        input,
        setInput,
      }}
    >
      {children}
    </PropContext.Provider>
  );
};

export default PropProvider;
