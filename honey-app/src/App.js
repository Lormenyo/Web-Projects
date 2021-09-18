import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import TopNavMenu from "../src/components/topNav/topNavMenu";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <div className="App-logo"></div>
            </Navbar.Brand>
            <div className="justify-content-end">
              <FiMenu />
            </div>
          </Container>
        </Navbar>
        <TopNavMenu />
      </Container>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
