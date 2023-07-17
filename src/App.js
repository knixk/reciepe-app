import Pages from "./pages/Pages.jsx";
import Category from "./components/Category.jsx";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav className="nav">
          <GiKnifeFork></GiKnifeFork>
          <Logo to={"/"}>Yummy</Logo>
        </Nav>

        <Search></Search>
        <Category></Category>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

/*
const Nav = styled(Nav)`
  display: flex;
`;
*/

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  margin-left: 1.2rem;
  font-weight: 400;
  /* text-transform: lowercase; */
  letter-spacing: 2px;
`;

const Nav = styled.div`
  padding: 2.5rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
