import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import './App.css';
import { isCompositeComponent } from "react-dom/test-utils";

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
