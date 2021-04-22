import React, { useState } from "react";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <div className="question"></div>
    </div>
  </main>;
}
