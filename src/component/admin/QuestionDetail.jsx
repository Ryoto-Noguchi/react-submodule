import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

const QuestionDetail = (props) => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const question = params.get("question");
  const answer = params.get("answer");
  const A = params.get("A");
  const B = params.get("B");
  const C = params.get("C");
  const D = params.get("D");
  const [valueA, setValueA] = useState(A);
  const [valueB, setValueB] = useState(B);
  const [valueC, setValueC] = useState(C);
  const [valueD, setValueD] = useState(D);
  const [questionValue, setQuestionValue] = useState(question);
  const [answerValue, setAnswerValue] = useState(answer);
  const [isEdited, setIsEdited] = useState(false)

  const handleSubmit = () => {
    let editedQuestion = {
      id: id,
      question: questionValue,
      choices: {
        A: valueA,
        B: valueB,
        C: valueC,
        D: valueD,
      },
      answer: answerValue,
    };
    console.log(JSON.stringify(editedQuestion));
    const json_questions = "http://localhost:8080/api/v1/questions";
    const postData = async () => {
      await axios.post(json_questions, editedQuestion);
      setIsEdited(true)
    };
    postData();
  };

  if (isEdited) {
    return <Redirect to="/admin/manage" />;
  }

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Table bordered hover>
              <thead>
                <tr>
                  <th colSpan="2">項目</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2" scope="row">
                    設問No.
                  </th>
                  <td>{id}</td>
                </tr>
                <tr>
                  <th colSpan="2" scope="row">
                    設問
                  </th>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={question}
                        value={questionValue}
                        onChange={(e) => setQuestionValue(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th rowSpan="4" scope="row">
                    選択肢
                  </th>
                  <td>A</td>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={A}
                        value={valueA}
                        onChange={(e) => setValueA(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={B}
                        value={valueB}
                        onChange={(e) => setValueB(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={C}
                        value={valueC}
                        onChange={(e) => setValueC(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={D}
                        value={valueD}
                        onChange={(e) => setValueD(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2" scope="row">
                    正解
                  </th>
                  <td>
                    <span>
                      <input
                        type="text"
                        placeholder={answer}
                        value={answerValue}
                        onChange={(e) => setAnswerValue(e.target.value)}
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" onClick={() => handleSubmit()}>
              送信
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default QuestionDetail;
