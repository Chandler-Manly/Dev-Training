import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Typeahead from "./components/Typeahead";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Header from "./components/Header";
import { baseURL, config } from "./services";
import "./App.css";
import "./components/Typeahead.css";


function App() {
  const [infos, setInfos] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getInfos = async () => {
      const resp = await axios.get(baseURL, config);
      setInfos(resp.data.records);
    };
    getInfos();
  }, [toggleFetch]);

  return (
    <div className="App">
      <h1>
        Welcome to the <div className="Dev">Dev-Dojo!</div>
      </h1>
      <h3>
        <em>A training ground for aspiring developers.</em>
      </h3>
      <Nav />
      <Route exact path="/">
        <h3>Home</h3>
      </Route>
      <Route exact path="/show">
        <h3>Show</h3>
      </Route>
      <Route exact path="/form">
        <Form infos={infos} setToggleFetch={setToggleFetch} />
        </Route>
      <Route path="/quiz">
        <h3>Take our quiz</h3>
      </Route>
      <Route path="/resources">
        <div className="resources">
          {infos.map((info) => (<Comments key={info.id} info={info} setToggleFetch={setToggleFetch}/>)) }
        </div>
      </Route>
      <Route path="/search">
        {" "}
        <Typeahead infos={infos}/>
      </Route>
      <Route path="/edit/:id">
        <Form infos={infos} setToggleFetch={setToggleFetch} />
      </Route>
      <footer>Add git hub and linkedin icons here</footer>
    </div>
  );
}

export default App;
