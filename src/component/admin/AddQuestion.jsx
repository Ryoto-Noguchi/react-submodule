import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function AddQuestion() {
  const handleSubmit = () => {};

  const handleBack = () => {};

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
                      <input type="text" />
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
                      <input type="text" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>
                    <span>
                      <input type="text" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>
                    <span>
                      <input type="text" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>
                    <span>
                      <input type="text" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2" scope="row">
                    正解
                  </th>
                  <td>
                    <span>
                      <select name="answer" id="answer_pull_down">
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
