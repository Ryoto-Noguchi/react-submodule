import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function QuestionDetail() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Table bordered hover>
              <tr>
                <th colSpan="2" scope="row">
                  設問No.
                </th>
                <td>1</td>
              </tr>
              <tr>
                <th colSpan="2" scope="row">
                  設問
                </th>
                <td>What country has the biggest poplulation in the world ?</td>
              </tr>
              <tr>
                <th rowSpan="4" scope="row">
                  選択肢
                </th>
                <td>A</td>
                <td>China</td>
              </tr>
              <tr>
                <td>B</td>
                <td>India</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Brazil</td>
              </tr>
              <tr>
                <td>D</td>
                <td>USA</td>
              </tr>
              <tr>
                <th colSpan="2" scope="row">
                  正解
                </th>
                <td>A</td>
              </tr>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default QuestionDetail;
