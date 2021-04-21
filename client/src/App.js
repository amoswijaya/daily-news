import './App.css';
import Nav from './components/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/subcribe">
            <h1>Hello anjay</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
