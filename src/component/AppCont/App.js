import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import BubbleSort from '../BubbleSort';
import QuickSort from '../QuickSort';
import SelectionSort from '../SelectionSort';
function App() {
  return (
    <div className="App">
      <ButtonToolbar>
        <Button><Link to="/">Bubble Sort</Link></Button>
        <Button variant="success"><Link to="/quick-sort">Quick Sort</Link></Button>
        <Button variant="warning"><Link to="/selection-sort">Selection Sort</Link></Button>
      </ButtonToolbar>

      <Switch>
        <Route exact path="/" component={BubbleSort} />
        <Route path="/quick-sort" component={QuickSort} />
        <Route path="/selection-sort" component={SelectionSort} />
      </Switch>
    </div>
  );
}

export default App;
