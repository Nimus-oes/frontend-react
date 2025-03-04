import Logo from "./components/Logo";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Logo />
      <Main>
        <Heading />
        <Form />
      </Main>
    </>
  );
}
