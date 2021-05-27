import React from "react";
import { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import Option from "./Option";

function QuestionManagement(props) {
  const { questions } = props;

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
            <Table bordered hover>
              <thead>
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
              <tbody>
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
                            <Button>追加</Button>
                            <Button>編集</Button>
                            <Button>削除</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <Option choices={choices} X={A}/>
                        <Option choices={choices} X={B}/>
                        <Option choices={choices} X={C}/>
                        <Option choices={choices} X={D}/>
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
