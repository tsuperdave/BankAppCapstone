
import './App.css';
import "./styles/global.scss";
import { Switch, Route, Router } from './router';
import HomePage from './pages/home';
import AdminPage from "./pages/admin";
import AboutUs from "./pages/aboutus";
import { Redirect } from 'react-router';
import PreferencesPage from './pages/preferences';
import AccountsPage from './pages/accounts';
import AuthSigninPage from './pages/auth/signin';
import AuthRegisterPage from './pages/auth/register';
// import { AuthorizationProvider } from './auth';

export default function App(props) {

  // wrap below in AuthProvider
  return (
    // <AuthorizationProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}>
            <Redirect to="/home" />
          </Route>

          <Route exact path='/home' component={HomePage} />

          <Route exact path="/aboutus" component={AboutUs} />

          <Route exact path="/auth/signin" component={AuthSigninPage} />

          <Route exact path="/register" component={AuthRegisterPage} />

          <Route exact path="/preferences" component={PreferencesPage} />

          {localStorage.getItem('userRole') === 'user' && (
          <Route exact path="/accounts" component={AccountsPage} />
          )}
          
          {localStorage.getItem('userRole') === 'admin' && (
          <Route exact path='/admin' component={AdminPage} />
          )}
          
        </Switch>
      </Router>
    // </AuthorizationProvider>
  );
}

