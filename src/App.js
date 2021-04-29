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

  return (
    <main>
      <Container className="container">
        <div className="question-box">
          <p className="question-text">{question.question}</p>
        </div>
        <Row className="row">
          <Col xs={6} className="choice-box">
            <div className="cell">
              <p className="choice">{question.choices.A}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <p className="choice">{question.choices.B}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <p className="choice">{question.choices.C}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <p className="choice">{question.choices.D}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
export default App;
