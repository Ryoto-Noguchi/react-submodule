// 親コンポーネント //
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Monitor from "./Monitor";

import Admin from "./Admin";
import Client from "./Client";
import Error from "./Error";
import Ranking from "./Ranking";

import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const json_questions = "http://localhost:8080/api/v1/questions";
    const json_responses = "http://localhost:8080/api/v1/responses";
    const fetchData = async () => {
      const questionData = await axios.get(json_questions);
      setQuestions(questionData.data);
      const responseData = await axios.get(json_responses);
      setResponses(responseData.data);
    };
    fetchData();
  }, []);

  if (questions.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Monitor questions={questions} />
        </Route>
        <Route exact path="/ranking">
          <Ranking responses={responses}/>
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/client">
          <Client />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
