import Main from './components/main/Main';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './app/store';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #353238;
  overflow: hidden;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Main />
      </AppWrapper>
    </Provider>
  );
};

export default App;
