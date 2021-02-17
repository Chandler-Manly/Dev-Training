import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Typeahead from "./components/Typeahead"
import Header from "./components/Header"
import './App.css';
import "./components/Typeahead.css";

function App() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    const getInfo = async () => {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Dev-training`;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      };
      const resp = await axios.get(url, config);
      setInfo(resp.data.records)
    };
      getInfo();
    }, []);


  return (
    <div className="App">
      <header>"I just want to build something."</header>
      <h1>Welcome to the Dev-Dojo!</h1>
      <h3><em>A training ground for aspiring developers.</em></h3>
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
      <Route path="/search">
      <Typeahead />
      </Route>
      <Route path="/edit/:id">
      <h3>edit page</h3>
        </Route>
<footer>Add git hub and linkedin icons here</footer>
    </div>
  );
}

export default App;
