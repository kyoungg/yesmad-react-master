import styled from "styled-components";

function App() {
  return (
    <Container>
      <Box bgColor="teal" />
      <Circle bgColor="pink" />
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
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
