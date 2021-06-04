
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import Signin from './components/Signin'
import Preferences from './pages/Preferences'
import { useState } from 'react';
import AlertSignin from './components/AlertSignin';
import useToken from './components/useToken';


function App() {

  // BELOW IS FOR CHECKING JWT
  // const [modalShow, setModalShow] = useState(false);
  const {token, setToken} = useToken();

  // if(!token) {
  //   return <Signin setToken={setToken} />
  // }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavbarHeader />
            <Signin setToken={setToken}/>
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
