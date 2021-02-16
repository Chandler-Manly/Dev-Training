import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dev-Training</h1>
      <Nav />
      <Route exact path="/">
        <h3>Home</h3>
      </Route>
      <Route path="/js">
        <h3>JavaScript Feed</h3>
      </Route>
      <Route path="/html">
        <h3>HTML Feed</h3>
      </Route>
      <Route path="/css">
        <h3>CSS Feed</h3>
      </Route>
      <Route path="/edit/:id">
        <h3>Form goes here</h3>
      </Route>

    </div>
  );
}

export default App;
