import '../src/App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Artists from './Artists';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
{/*       <header className="App-header">
      <Switch>
            <Route path='/Artists' component={Artists}  />
            <Redirect to='/Artists' />
          </Switch>
      </header> */}
    </div>
  );
}

export default App;
