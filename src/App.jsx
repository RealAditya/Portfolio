import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  color: #eee;
  background-color: #121212;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #646cff;
  border: none;
  padding: 0.8em 1.6em;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #535bf2;
  }
`;

function App() {
  return (
    <Container>
      <Title>Welcome to My Portfolio</Title>
      <Button>Click Me</Button>
    </Container>
  );
}

export default App;
