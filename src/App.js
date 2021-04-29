import React, { useState } from "react";
import data from "./data";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
function App() {
  const [questions, setQuestions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.find((question) => question.id === questionNumber);
  // const currentQuestionNumber = questions.find((question) => question.id === 1);
  // setQuestionNumber(currentQuestionNumber)

  return (
    <main>
      <Container>
        <div className="question">{question.question}</div>
        <Row className="row">
          <Col xs={6} className="choice-box">
            {question.choices.A}
          </Col>
          <Col xs={6} className="choice-box">
            {question.choices.B}
          </Col>
          <Col xs={6} className="choice-box">
            {question.choices.C}
          </Col>
          <Col xs={6} className="choice-box">
            {question.choices.D}
          </Col>
        </Row>
      </Container>
    </main>
  );
}
export default App;
