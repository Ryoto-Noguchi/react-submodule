import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Table,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ↓font-awesomeのnameの指定の仕方(https://stackoverflow.com/questions/56351531/how-to-find-icon-names-for-font-awesome-to-import-with-react)
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Monitor from "./Monitor";
import axios from "axios";

const Admin = (props) => {
  const { countdown } = props;

  const [questions, setQuestions] = useState([]);
  // const [question, setQuestion] = useState([]);
  // const [questionNUmber, setQuestionNumber] = useState(1)
  // const [correctAnswer, setCorrectAnswer] = useState("")

  useEffect(() => {
    const testUrl = "http://localhost:8080/api/v1/questions";
    const fetchTest = async () => {
      const res = await axios.get(testUrl);
      setQuestions(res.data);
      // const que = questions.find((question) => question.id === questionNUmber);
      // setQuestion(que);
      // // console.log(question.answer);
      // setCorrectAnswer(question.answer);
      // console.log(correctAnswer);
      // console.log(que.question)
      // console.log(questions.find((question) => question.id === num));
      // return res;
    };
    fetchTest();
  }, []);

  if (questions.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <Container className="container">
      {/* <div>{`問題${questions[0].question}`}</div> */}
      <Row className="row">
        <Col xs={7}>
          <Form>
            <Form.Group controlId="monitorMessage">
              <Form.Label>
                <FontAwesomeIcon icon={faEnvelope} />
                Monitor Message
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="メッセージを入力してください"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="warning" type="button">
              Clear
            </Button>
          </Form>
        </Col>
        <Col xs={5}>
          <div className="sound-box ">
            <h3 className="admin-index">
              <FontAwesomeIcon icon={faEnvelope} />
              Sounds
            </h3>
            <div className="sound-btns">
              <Button>Question</Button>
              <Button id="ready-go-btn" onClick={() => countdown()}>
                Ready Go !
              </Button>
              <Button>Answer Check</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={7}></Col>
        <Col xs={5}></Col>
      </Row>
    </Container>
  );
};

export default Admin;
