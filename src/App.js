import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <Switch>
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
