import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const animation = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: pink;
  animation: ${animation} 1s linear infinite;
`;
