import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function QuestionManagement() {
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
                  <th>No.</th>
                  <th>設問</th>
                  <th colSpan="4">選択肢</th>
                  <th>正解</th>
                  <th>オプション</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2" className="merged-cell">
                    1
                  </td>
                  <td rowSpan="2" className="merged-cell">
                    Who is the President of the United States
                  </td>
                  <td className="single-cell">A</td>
                  <td className="single-cell">B</td>
                  <td className="single-cell">C</td>
                  <td className="single-cell">D</td>
                  <td rowSpan="2" className="merged-cell">
                    A
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
                  <td className="single-cell">Donald Trump</td>
                  <td className="single-cell">Hillary Clinton</td>
                  <td className="single-cell">Joe Biden</td>
                  <td className="single-cell">Barack Obama</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuestionManagement;
