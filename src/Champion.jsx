import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function Champion(props) {
  const { responses } = props;
  // const [responses, setResponses] = useState(data);
  const [isPlaying, setIsPlaying] = useState(false);
  const championAudioEl = useRef(null);

  // ↓table要素のIDを取得(この中で処理を実行)
  const addRankingElements = () => {
    var tbody = document.getElementById("tbody");
    const numberOfDisplayItems = 10;
    for (let i = 0; i < numberOfDisplayItems; i++) {
      // ↓tr要素を生成
      var tr = document.createElement("tr");
      tr.setAttribute("class", "table-row non-visible");

      // ↓td要素(回答者名ボックス)を生成
      var td_name_box = document.createElement("td");
      td_name_box.setAttribute("class", "table-td name-box");

      // ↓span要素(順位)を生成
      var span_rank = document.createElement("sapn");
      span_rank.setAttribute("class", "rank-number");
      span_rank.innerHTML = responses[i].id;

      // ↓生成したspan要素(順位)をtd要素(回答者名ボックス)にappend
      td_name_box.appendChild(span_rank);

      // ↓p要素(回答者名)を生成
      var p_name = document.createElement("p");
      p_name.setAttribute("class", "name-in-table");
      p_name.innerHTML = responses[i].fullName;
      td_name_box.appendChild(p_name);

      // ↓中身を作成したtd要素(回答者名ボックス)をtrに追加
      tr.appendChild(td_name_box);

      // ↓td要素(回答時間ボックス)を生成
      var td_time_box = document.createElement("td");
      td_time_box.setAttribute("class", "table-td answered-time-box");

      // ↓p要素(回答時間)を生成
      var p_time = document.createElement("p");
      p_time.setAttribute("class", "answered-time");
      p_time.innerHTML = responses[i].time
        .replaceAll(":", "")
        .replace(/^0+/, ""); // HH:mmの0を消去
      td_time_box.appendChild(p_time);
      tr.appendChild(td_time_box);

      tbody.appendChild(tr);
    }
  };

  useEffect(() => {
    addRankingElements();
  }, []);

  return (
    <main id="ranking_screen">
      <Container>
        <Row id="ranking_table_bg">
          <Col>
            <Table id="ranking_table">
              <tbody id="tbody">
                <tr>
                  <td rowSpan="10" className="vertical-title-box">
                    <p id="vertical_title">
                      早押しベスト
                      <br />
                      <span className="text-make-smaller">10</span>
                      <Button
                        className="btn"
                        // onClick={() => removeHide()}
                      >
                        Go
                      </Button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <audio src="./music/champion.mp3" ref={championAudioEl}></audio>
      </Container>
    </main>
  );
}

export default Champion;
