import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Option from "./Option";
import axios from "axios";

function QuestionManagement(props) {
  const [questions, setQuestions] = useState(props.questions);
  useEffect(() => {
    const json_questions = "http://localhost:8080/api/v1/questions";
    const fetchData = async () => {
      const questionData = await axios.get(json_questions);
      setQuestions(questionData.data);
    };
    fetchData();
    console.log("rendered");
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="title-area">
              <div className="title-box"></div>
              <h1>問題一覧</h1>
              <div>
                <Button>新規追加</Button>
              </div>
            </div>
            <Table id="question_table" bordered hover>
              <thead id="thead">
                <tr className="thread-tr">
                  <th id="question_number_column">No.</th>
                  <th id="question_column">設問</th>
                  <th id="choices_column" colSpan="4">
                    選択肢
                  </th>
                  <th id="answer_column">正解</th>
                  <th id="option_column">オプション</th>
                </tr>
              </thead>
              <tbody id="tbody">
                {questions.map((q) => {
                  const { id, question, choices, answer } = q;
                  // 選択肢の宣言
                  const A = "A";
                  const B = "B";
                  const C = "C";
                  const D = "D";
                  return (
                    // <Fragement>使用する理由は、returnないには何かしら親要素を必要とするが、<div>は<tr>の親要素になることはできないため。
                    <Fragment key={id}>
                      <tr>
                        <td rowSpan="2" className="merged-cell">
                          {id}
                        </td>
                        <td rowSpan="2" className="merged-cell">
                          {question}
                        </td>
                        <td className="single-cell">{A}</td>
                        <td className="single-cell">{B}</td>
                        <td className="single-cell">{C}</td>
                        <td className="single-cell">{D}</td>
                        <td rowSpan="2" className="merged-cell">
                          {answer}
                        </td>
                        <td rowSpan="2" className="merged-cell ">
                          <div className="btn-box">
                            <Link
                              to={{
                                pathname: "/admin/questionDetail",
                                search: `?id=${id}&question=${question}&A=${choices[A]}&B=${choices[B]}&C=${choices[C]}&D=${choices[D]}&answer=${answer}`,
                              }}
                            >
                              <Button variant="warning">編集</Button>
                            </Link>
                            <Link to="/#">
                              <Button variant="danger">削除</Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <Option choices={choices} X={A} />
                        <Option choices={choices} X={B} />
                        <Option choices={choices} X={C} />
                        <Option choices={choices} X={D} />
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuestionManagement;
