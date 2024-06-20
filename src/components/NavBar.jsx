import styled from "styled-components";

const NavBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  height: 10vh;
  background-color: #9292ad;
  color: #fff;
`;

function NavBar() {
  return (
    <NavBarStyle>
      <h1>Recipes</h1>
    </NavBarStyle>
  );
}

export default NavBar;
