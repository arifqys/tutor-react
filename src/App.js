import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from './TodoList';
import ShowsCatalogue from './ShowsCatalogue';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">To Do List</Link>
          </li>
          <li>
            <Link to="/shows">TV Series</Link>
          </li>
        </ul>
      </nav>

      <div className="App">
      <Switch>
        <Route path="/" exact>
          <TodoList />
        </Route>
        <Route path="/shows">
          <ShowsCatalogue />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
