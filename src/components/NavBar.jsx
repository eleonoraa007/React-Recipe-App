import styled from "styled-components";
import Search from "./search/Search";

const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  height: 10vh;
  background-color: #9292ad;
  color: #fff;
`;

function NavBar({ setResults }) {
  return (
    <NavBarStyle>
      <p>Menu</p>
      <Search setResults={setResults} />
    </NavBarStyle>
  );
}

export default NavBar;
