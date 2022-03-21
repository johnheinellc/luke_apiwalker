import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Form from './components/Form';
import Api from './components/Api';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form></Form>
        <Switch>
          <Route exact path = "/:topic/:id">
            <Api/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );}
export default App;




// https://swapi.dev/api/