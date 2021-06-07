
import './App.css';
import "./styles/global.scss";
import { Switch, Route, Router } from './router';
import HomePage from './pages/Home';
import AdminPage from "./pages/admin";

export default function App(props) {

  // wrap below in AuthProvider
  return (
 
      <Router>
        <Switch>

          <Route exact path='/home' component={HomePage} />

          <Route exact path="/admin" component={AdminPage} />
 
        </Switch>
      </Router>
    
  );
}

