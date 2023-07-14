import styled from "styled-components";

function App() {
  return (
    <Container>
      <Box bgColor="teal" />
      <Circle bgColor="pink" />
      <Btn>Btn</Btn>
      <Btn as="a" href="/">
        a tag
      </Btn>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  background-color: black;
  color: white;
  border-radius: 15px;
  height: 25px;
  margin: 5px;
`;

const Input = styled.input.attrs({ required: true, minLength: "5" })`
  backgrounf-color: gray;
  height: 30px;
`;
