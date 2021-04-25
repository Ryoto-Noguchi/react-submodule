import React, { useState } from "react";
import data from "./data";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
function App() {
  const [questions, setQuestions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.id === questionNumber;
  // const currentQuestionNumber = questions.find((question) => question.id === 1);
  // setQuestionNumber(currentQuestionNumber)
  return (
    
    <main>
      <div className="container">
        <div className="question">
          <h2>Here is a line for a question</h2>
        </div>
        <div className="choices">
          <Row>
            <Col xs={6}>
              Here is a box for choice
              <Button variant="primary">Button</Button>
            </Col>
            <Col xs={6}>
              Here is a box for choice
              <Button variant="primary">Button</Button>
            </Col>
            <Col xs={6}>
              Here is a box for choice
              <Button variant="primary">Button</Button>
            </Col>
            <Col xs={6}>
              Here is a box for choice
              <Button variant="primary">Button</Button>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
}
export default App;
