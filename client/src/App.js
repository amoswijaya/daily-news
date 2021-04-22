import './App.css';
import Nav from './components/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Subscribe from './views/Subscribe';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
