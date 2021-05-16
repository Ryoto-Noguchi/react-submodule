import React, { useState } from "react";
import data from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
// import axios from "axios";
import Countdown from "./Countdown";

const Monitor = (props) => {
  const [questions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.find((question) => question.id === questionNumber);
  const correctAnswer = question.answer;
  let [number, setNumber] = useState(10); // 10秒カウントダウン用


  const goNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const goPrevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };

  return (
    <main>
      <Container className="container">
        <div className="question-box">
          <p className="question-text">{question.question}</p>
          <span id="count-down">{number}</span>
        </div>
        <Row className="row">
          <Col className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet red">
                  <span className="character">A</span>
                </p>
              </div>
              <p className="choice">{question.choices.A}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet blue">
                  <span className="character">B</span>
                </p>
              </div>
              <p className="choice">{question.choices.B}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet yellow">
                  <span className="character">C</span>
                </p>
              </div>
              <p className="choice">{question.choices.C}</p>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet green">
                  <span className="character">D</span>
                </p>
              </div>
              <p className="choice">{question.choices.D}</p>
            </div>
          </Col>
        </Row>
        <div className="btn-area">
          {questionNumber > 1 && (
            <Button
              className="manupulate-btn"
              variant="info"
              onClick={() => goPrevQuestion()}
            >
              Prev
            </Button>
          )}
          <Countdown number={number} setNumber={setNumber} correctAnswer={correctAnswer}/>
          
          {questionNumber < questions.length && (
            <Button
              className="manupulate-btn"
              variant="warning"
              onClick={() => goNextQuestion()}
            >
              Next
            </Button>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Monitor;
