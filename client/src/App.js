import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Typeahead from "./components/Typeahead";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Quiz from "./components/Quiz";
import "./components/Typeahead.css";
import "./App.css";
import "./Quiz.css";

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
        Welcome to the <div className="Dev">Developer's</div> Training Ground
      </h1>
      <h3>
        <em>A training ground for aspiring developers.</em>
      </h3>
      <Header /> 
      <Nav />
      <Route exact path="/">
      <div className="home">
        <h3>Home is wherever I am with you.</h3>
        </div>
      </Route>
      <Route exact path="/algorithms">
      <div className="algorithms">
        <h3>Algorithms HERE</h3>
        </div>
      </Route>
      <Route exact path="/data-structures">
      <div className="data-structures">
        <h3>Data-Structures HERE</h3>
        </div>
        </Route>
      <Route path="/quiz"> <Quiz /></Route>
      <div className="quiz">
      <Link to={`/quiz`}>
      <button className="quiz-button" type="submit">Do you have what it takes to be on Team Sapphire:Take our quiz and discover your potential.</button>
        </Link>
      </div>

      <Route exact path="/form">
        <Form infos={infos} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/resources">
        <Typeahead infos={infos} />
        <div className="resources">
          {infos.map((info) => (
            <Comments
              key={info.id}
              info={info}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/edit/:id">
        <Form infos={infos} setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
