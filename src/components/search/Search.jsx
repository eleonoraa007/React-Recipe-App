import { useContext, useState } from "react";
import styles from "./Search.module.css";
import { PropContext } from "../../context/PropContext";

function Search() {
  const { setResults } = useContext(PropContext);
  const [input, setInput] = useState("");

  const fetchData = (query) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=23e85afe8d724fb781cb6d7e2f2ebcda&query=${query}&number=50`
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((data) => {
          return (
            query &&
            data &&
            data.title &&
            data.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        console.log(results);
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search here.."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default Search;
