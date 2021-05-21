import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Ranking() {
  return (
    <main>
      <Container>
        <Row>
          {/* <Col xs={2}>

          </Col> */}
          {/* <Col xs={10}>

          </Col> */}
          <Col>
            <Table>
              <tr>
                <td rowSpan="10" style={{ width: "10%" }}>
                  <p id="vertical-title">
                    早押しワ<span className="turn-90">ー</span>
                    スト
                    <br />
                    <span className="text-make-smaller">10</span>
                  </p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-td">
                  <p className="name-in-table">John McKenny</p>
                </td>
              </tr>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Ranking;
