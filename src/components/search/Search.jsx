import styled from "styled-components";
import { useState } from "react";

const StyledSearch = styled.input`
  margin-top: 13px;
  margin-right: 20px;
  height: 5.5vh;
  width: 20vh;
  text-align: start;
  padding-left: 20px;
  border: 1px solid;
  border-radius: 20px;
  border-color: #808080;
  background-color: #fff;
`;

function Search({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (query) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=23e85afe8d724fb781cb6d7e2f2ebcda&query=${query}`
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((data) => {
          return (
            query &&
            // value &&
            data &&
            data.title &&
            // data.title.toLowerCase().includes(value)
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
    <StyledSearch
      type="text"
      placeholder="Search here.."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default Search;
