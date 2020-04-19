import React from 'react';
import './App.css';
import ResponsiveDrawer from './ResponsiveDrawer';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
      <Switch>
          <Route exact path="/try">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/">
          <Header />

          </Route>

          <Route exact path="/terms">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/documentation">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/results">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/analysis">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/who">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/donate">
          <ResponsiveDrawer />
          </Route>
          <Route exact path="/recover">
            <ResponsiveDrawer />
          </Route>
          <Route exact path="/disclaimer">
          <ResponsiveDrawer />
          </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
