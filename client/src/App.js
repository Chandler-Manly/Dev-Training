import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config, algoURL } from "./services";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Algorithm from "./components/Algorithm";
import "./components/Typeahead.css";
import "./App.css";

function App() {
  const [infos, setInfos] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [algos, setAlgos] = useState([]);

  useEffect(() => {
    const getInfos = async () => {
      const resp = await axios.get(baseURL, config);
      setInfos(resp.data.records);
    };
    getInfos();
  }, [toggleFetch]);

  useEffect(() => {
    const getAlgos = async () => {
      const response = await axios.get(algoURL, config);
      setAlgos(response.data.records);
    };
    getAlgos();
  }, [toggleFetch]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="quiz">
        <div className="discover">Discover Your Expertise.</div>
        <Link to={`/quiz`}>
          <button className="quiz-button" type="submit">
            START THE DEVELOPER'S QUIZ
          </button>
        </Link>
      </div>

      <Route path="/quiz">
        <Quiz />
      </Route>

      <Route exact path="/">
        <div className="about-us">
          <h3>About us</h3>
          <p>
            We are thrilled to provide an environment for developers from all
            backgrounds to get the necessary repetitions to level up from
            beginner to expert level. Whether you are looking to get some extra
            practice with our quiz feature or simply vent some debugging
            frustration on our Forum the Developer's Training Ground is here for
            you. 3, 2, 1, -- NPX create-react-app.
          </p>
        </div>
      </Route>

      <Route exact path="/form">
        <div className="post-form">
          <Form infos={infos} setToggleFetch={setToggleFetch} />
        </div>
      </Route>

      <Route path="/algorithm">
        <h3>When you learn these algos the sky is the limit!</h3>
        <div className="show">
        {algos.map((algo) => (
            <Algorithm
              key={algo.id}
              algo={algo}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>


      <Route path="/resources">
        <div className="resources">
        <h3>Share some wisdom here</h3>
      <h3>Recently mastered concept or a persistent bug all is welcomed</h3>
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
