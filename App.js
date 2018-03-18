import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import Auth from './models/Auth';
import { Provider } from 'mobx-react';

const auth = new Auth;

class App extends React.Component {
  render() {
    return (
      <Provider auth={auth}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default App;