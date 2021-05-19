import React, { useState, useEffect, useRef } from "react";
// import data from "./data";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Countdown from "./Countdown";
import NextQuestion from "./NextQuestion";
import PrevQuestion from "./PrevQuestion";

const Monitor = (props) => {
  const { questions } = props;
  const quizCueAudioEl = useRef(null);

  const [questionNumber, setQuestionNumber] = useState(1);
  let [number, setNumber] = useState(10); // 10秒カウントダウン用
  const [isPlaying, setIsPlaying] = useState(false);
  const [numberOfAnswersA, setNumberOfAnswersA] = useState(0);
  const [numberOfAnswersB, setNumberOfAnswersB] = useState(4);
  const [numberOfAnswersC, setNumberOfAnswersC] = useState(8);
  const [numberOfAnswersD, setNumberOfAnswersD] = useState(2);
  const [isQuizCue, setIsQuizCue] = useState(false);

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

  useEffect(() => {
    if (isQuizCue) {
      quizCueAudioEl.current.play();
    }
    return () => {
      setIsQuizCue(false)
    }
  }, [isQuizCue])

  const resetQuestion = () => {
    let cueMonitor = document.getElementById("cue-monitor");
    setIsQuizCue(true);
    cueMonitor.classList.remove("hide");
    setNumber(10);
    setIsPlaying(false);
    const characters = document.getElementsByClassName("character");
    for (let i = 0; i < characters.length; i++) {
      characters[i].closest(".cell").classList.remove("blink-bg-color");
      characters[i]
        .closest(".cell")
        .lastElementChild.classList.remove("toggle-bg-color");
    }
    const answerBoxes = document.getElementsByClassName("count-box");
    for (let i = 0; i < answerBoxes.length; i++) {
      answerBoxes[i].classList.add("hide");
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
              <div>
                <p className="choice">{question.choices.A}</p>
              </div>
              <div className="count-box hide">
                <p className="number-of-answers">{numberOfAnswersA}</p>
              </div>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet blue">
                  <span className="character alphabet-b">B</span>
                </p>
              </div>
              <div>
                <p className="choice">{question.choices.B}</p>
              </div>
              <div className="count-box hide">
                <p className="number-of-answers">{numberOfAnswersB}</p>
              </div>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet yellow">
                  <span className="character">C</span>
                </p>
              </div>
              <div>
                <p className="choice">{question.choices.C}</p>
              </div>
              <div className="count-box hide">
                <p className="number-of-answers">{numberOfAnswersC}</p>
              </div>
            </div>
          </Col>
          <Col xs={6} className="choice-box">
            <div className="cell">
              <div className="circle">
                <p className="alphabet green">
                  <span className="character">D</span>
                </p>
              </div>
              <div>
                <p className="choice">{question.choices.D}</p>
              </div>
              <div className="count-box hide">
                <p className="number-of-answers">{numberOfAnswersD}</p>
              </div>
            </div>
          </Col>
        </Row>
        <div id="cue-monitor" className="">
          <h1 className="page-title">問題です！</h1>
        </div>
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
        <audio src="./music/quiz_cue.mp3" ref={quizCueAudioEl} muted autoPlay></audio>
      </Container>
    </main>
  );
};

export default Monitor;
