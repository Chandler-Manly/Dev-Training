import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config, algoURL, algoConfig } from "./services";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Typeahead from "./components/Typeahead";
import Comments from "./components/Comments";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Quiz from "./components/Quiz";
import Algorithm from "./components/Algorithm";
import "./components/Typeahead.css";
import "./App.css";

function App() {
  const [infos, setInfos] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [algos, setAlgos] = useState([])

  useEffect(() => {
    const getInfos = async () => {
      const resp = await axios.get(baseURL, config);
      setInfos(resp.data.records);
    };
    getInfos();
  }, [toggleFetch]);


  useEffect(() => {
    const getAlgos = async () => {
      const response = await axios.get(algoURL, algoConfig);
      setAlgos(response.data.records);
    };
    getAlgos();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header /> 
      <Nav />

      <Route exact path="/">
      <div className="about-us">
          <h3>About us</h3>
          <p>We are thrilled to provide an environment for developers from all backgrounds to get the necessary repetitions to level up from beginner to expert level. Whether you are looking to get some extra practice with our quiz feature or simply vent some debugging frustration on our "Live-Feed" the Developer's Training Ground is here for you. A Manly Technologies Company.</p>
        </div>
      </Route>

      <Route exact path="/algorithm">
        <div className="algos">
          {algos.map((algo) => (
            <Algorithm
              key={algo.id}
              algo={algo}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>

      <Route exact path="/data-structures">
      <div className="data-structures">
        <h3>Data-Structures HERE</h3>
        </div>
      </Route>
      
      <Route path="/quiz"> <Quiz />
      <div className="quiz">
      <Link to={`/quiz`}>
      <button className="quiz-button" type="submit">Do you have what it takes to be on Team Sapphire:Take our quiz and discover your potential.</button>
        </Link>
        </div>
        </Route>

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
