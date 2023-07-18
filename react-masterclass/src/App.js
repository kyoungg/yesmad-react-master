import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <Box>
        <span> :D </span>
      </Box>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  animation: ${animation} 1s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      color: red;
    }
    &:active {
      color: blue;
    }
  }
`;
