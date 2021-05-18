import React, { useState, useEffect } from "react";
// import data from "./data";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Countdown from "./Countdown";
import NextQuestion from "./NextQuestion";
import PrevQuestion from "./PrevQuestion";

const Monitor = (props) => {
  const {questions} = props;

  const [questionNumber, setQuestionNumber] = useState(1);
  let [number, setNumber] = useState(10); // 10秒カウントダウン用
  const [isPlaying, setIsPlaying] = useState(false);
  
  const question = questions.find((question) => question.id === questionNumber);
  const correctAnswer = question.answer;

  const goNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    resetQuestion();
  };

  const goPrevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
    resetQuestion();
  };

  const resetQuestion = () => {
    setNumber(10);
    setIsPlaying(false);
    var elements = document.getElementsByClassName("character");
    for (let i = 0; i < elements.length; i++) {
      elements[i].closest(".cell").classList.remove("blink-bg-color");
    }
  };

  if (questions.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <main id="monitor">
      <Container className="container">
        <div className="question-box">
          <span id="question-mark">Q</span>
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
                  <span className="character alphabet-b">B</span>
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
          <PrevQuestion
            questionNumber={questionNumber}
            goPrevQuestion={goPrevQuestion}
          />
          <Countdown
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            number={number}
            setNumber={setNumber}
            correctAnswer={correctAnswer}
          />
          <NextQuestion
            questionNumber={questionNumber}
            questions={questions}
            goNextQuestion={goNextQuestion}
          />
        </div>
        <br />
      </Container>
    </main>
  );
};

export default Monitor;
