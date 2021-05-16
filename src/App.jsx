// 親コンポーネント //
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Monitor from "./Monitor";

import Admin from "./Admin";
import Client from "./Client";
import Error from "./Error";

function App() {
  // let [number, setNumber] = useState(10);

  // const countdown = () => {
  //   console.log("clicked");
  //   console.log(number);
  //   const count = 0;
  //   const timerID = setInterval(function () {
  //     if (number === count) {
  //       clearInterval(timerID);
  //       ringTimeUp();
  //       ringAnswerCheck();
  //     } else {
  //       setNumber(--number);
  //       console.log(number);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   const timerID = setInterval(function () {
  //     const count = 0;
  //     if (number === count) {
  //       clearInterval(timerID);
  //       ringTimeUp();
  //       ringAnswerCheck();
  //     } else {
  //       setNumber(--number);
  //       // console.log(number);
  //     }
  //   }, 1000);
  // }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Monitor />
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
