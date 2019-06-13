import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import { StartPage } from './components/start-page/main-page.component';
import { ServerTest } from './components/connection-tests/serverTest.component';
import { NewGamePage } from './components/new-game/new-game.component';
import { OtherServerTest } from './components/connection-tests/other-serverTest.component';
import ConnectionComponent  from './components/connection.component';
import { Provider } from 'react-redux';
import { store } from './Store';

export class App extends React.Component <any, any> {
  
  render(){
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={StartPage}/>
              <Route path='/selftest' component={ServerTest}/>
              <Route path='/networktest' component={OtherServerTest}/>
              <Route path='/new' component={NewGamePage}/>
              
            </Switch>
          </BrowserRouter>
          <ConnectionComponent/>
        </Provider>
      </div>
    );
  }
}

export default App;
