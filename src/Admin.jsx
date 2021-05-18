import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ↓font-awesomeのnameの指定の仕方(https://stackoverflow.com/questions/56351531/how-to-find-icon-names-for-font-awesome-to-import-with-react)
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import Monitor from "./Monitor";
import axios from "axios";

const Admin = (props) => {
  const { countdown } = props;
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
