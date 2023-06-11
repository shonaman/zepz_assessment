import UsersGrid from './components/behavioural/UsersList/UsersGrid';
import styled from 'styled-components';

const Heading = styled.h2`
  text-align: center;
  color: purple;
`;

const App = () => {
  return (
    <>
      <Heading>StakeOverflow users list</Heading>
      <UsersGrid />
    </>
  );
};

export default App;
