import React, { useState, useRef } from "react";
import data from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Admin from "./Admin";

const Monitor = (props) => {
  const [questions, setQuestions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.find((question) => question.id === questionNumber);
  let [number, setNumber] = useState(10); // 10秒カウントダウン用

  const countdown = () => {
    const count = 0;
    const timerID = setInterval(function () {
      if (number === count) {
        clearInterval(timerID);
        ringTimeUp();
        ringAnswerCheck();
      } else {
        setNumber(--number);
      }
    }, 1000);
  };

  return (
    <main>
      <Container className="container">
        <div className="question-box">
          <p className="question-text">{question.question}</p>
          <span id="count-down">{number}</span>
          <button onClick={() => countdown()}>Check</button>
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
      </Container>
    </main>
  );
}

export function ringTimeUp() {
  console.log("Time's Up");
}

export function ringAnswerCheck() {
  console.log("Answer Check");
}


export default Monitor;
