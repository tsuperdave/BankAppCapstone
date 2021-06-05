
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import SigninOut from './components/SigninOut'
import Preferences from './containers/Preferences'
import useToken from './components/useToken';
import { useState } from 'react';
import Register from './components/Register';


function App() {

  const {token, setToken} = useToken();
  const [modalShow, setModalShow] = useState(false);

  //add func to check if token exists, to disallow routing to other pages
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavbarHeader />
            <SigninOut setToken={setToken}/>
            <Register />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
