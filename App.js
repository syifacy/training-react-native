import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import RootStack from './src/navigators/rootStack';
import store from './src/store';

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

