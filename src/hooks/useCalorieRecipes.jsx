import { useState, useEffect } from "react";

export function useCalorieRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:8000/calories/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Response is not ok");
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      } catch (err) {
        setError(err.message || "An unknown error occurred.");
      }
    };
    fetchRecipes();
  }, []);

  return { recipes, error };
}
