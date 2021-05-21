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

    useEffect(() => {
      const testUrl = "http://localhost:8080/api/v1/questions";
      const fetchTest = async () => {
        const res = await axios.get(testUrl);
        setQuestions(res.data);
      };
      fetchTest();
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
          <Ranking />
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
