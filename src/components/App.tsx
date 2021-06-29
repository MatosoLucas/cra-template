import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            This is a CRA Template
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
