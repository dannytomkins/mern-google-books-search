import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Saved from './pages/Saved'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Welcome />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
