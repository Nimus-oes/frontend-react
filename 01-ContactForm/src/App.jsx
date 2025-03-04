import Logo from "./components/Logo";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Form from "./components/Form";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Logo />
      <Main>
        <Title />
        <Subtitle />
        <Form />
      </Main>
    </>
  );
}

export default App;
