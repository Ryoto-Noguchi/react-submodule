import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [answer, setAnswer] = useState("A");
  const history = useHistory();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    let newQuestion = {
      question: question,
      choices: {
        A: A,
        B: B,
        C: C,
        D: D,
      },
      answer: answer,
    };
    console.log(JSON.stringify(newQuestion));
    const json_questions = "http://localhost:8080/api/v1/questions";
    const postData = async () => {
      await axios.post(json_questions, newQuestion);
      setIsSubmitted(true);
    };
    postData();
  };

  const handleBack = () => {
    history.push("/admin/manage");
  };

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  if (isSubmitted) {
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
                    設問
                  </th>
                  <td>
                    <span>
                      <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
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
                        value={A}
                        onChange={(e) => setA(e.target.value)}
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
                        value={B}
                        onChange={(e) => setB(e.target.value)}
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
                        value={C}
                        onChange={(e) => setC(e.target.value)}
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
                        value={D}
                        onChange={(e) => setD(e.target.value)}
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
                      <select
                        name="answer"
                        id="answer_pull_down"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              variant="primary"
              style={{ marginRight: "1rem" }}
              onClick={() => handleSubmit()}
            >
              送信
            </Button>
            <Button variant="warning" onClick={() => handleBack()}>
              戻る
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default AddQuestion;
