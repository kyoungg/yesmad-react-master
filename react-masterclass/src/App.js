import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <h1>Hello</h1>
      <Box>
        <span> :D </span>
      </Box>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const animation = keyframes`
0%{
  transform:rotate(0deg);
  background-color: pink;
}
50%{
  transform:rotate(180deg);
  background-color: tomato;
}
100%{
  transform:rotate(360deg);
  background-color: pink;
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
  border-radius: 30%;
  margin: 20px;
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
