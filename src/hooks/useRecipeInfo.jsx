import { useState, useEffect } from "react";

export const useRecipeInfo = (recipeId) => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=23e85afe8d724fb781cb6d7e2f2ebcda`
        );
        // const response = await fetch(
        //   "http://localhost:8000/results/?id={recipeId}",
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipeInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeInfo();
  }, [recipeId]);

  return { recipeInfo, loading, error };
};
