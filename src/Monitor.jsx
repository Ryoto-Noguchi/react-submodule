import React, { useState, useEffect } from "react";
import data from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const Monitor = (props) => {
  const [questions, setQuestions] = useState(data);
  const [questionNumber, setQuestionNumber] = useState(1);
  const question = questions.find((question) => question.id === questionNumber);
  // const correctAnswer = question.answer;
  let [number, setNumber] = useState(10); // 10秒カウントダウン用

  const countdown = () => {
    console.log("clicked");
    console.log(number);
    const count = 0;
    const timerID = setInterval(function () {
      if (number === count) {
        clearInterval(timerID);
        ringTimeUp();
        ringAnswerCheck();
      } else {
        setNumber(--number);
        console.log(number);
      }
    }, 1000);
  };

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
              {/* {correctAnswer === "C" && number === 0 && <span>◉</span>} */}
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
          <Button className="manupulate-btn" onClick={() => countdown()}>
            Start
          </Button>
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

export function ringTimeUp() {
  console.log("Time's Up");
}

export function ringAnswerCheck() {
  console.log("Answer Check");
}

export default Monitor;
