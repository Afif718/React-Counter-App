import "./App.css";
import AppName from "./components/AppName";
import Buttons from "./components/Buttons";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <AppName />
        <Buttons />
      </Container>
    </>
  );
}

export default App;
