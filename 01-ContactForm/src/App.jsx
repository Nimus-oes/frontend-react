import Header from "./components/Header";
import Main from "./components/Main";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Title />
        <Subtitle />
        <Form />
      </Main>
    </>
  );
}
