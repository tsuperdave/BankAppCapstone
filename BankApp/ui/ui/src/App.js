
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home'
import Preferences from './containers/Preferences'
import useToken from './components/useToken';



function App() {

  //add func to check if token exists, to disallow routing to other pages
  const {token, setToken} = useToken();

  if(!token) {
    return <Home setToken={setToken}/>
    
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
