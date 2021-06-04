
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import Signin from './components/Signin'
import Preferences from './pages/Preferences'
import useToken from './components/useToken';


function App() {

  const {token, setToken} = useToken();
  
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
