import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function Ranking() {
  const [isPlaying, setIsPlaying] = useState(false);
  const rankingAudioEl = useRef(null);

  // ↓table要素のIDを取得(この中で処理を実行)
  const addRankingElements = () => {
    var tbody = document.getElementById("tbody");
    for (let i = 0; i < 10; i++) {
      // ↓tr要素を生成
      var tr = document.createElement("tr");
      tr.setAttribute("class", "table-row non-visible");

      // ↓td要素(回答者名ボックス)を生成
      var td_name_box = document.createElement("td");
      td_name_box.setAttribute("class", "table-td name-box");

      // ↓p要素(回答者名)を生成
      var p_name = document.createElement("p");
      p_name.setAttribute("class", "name-in-table");
      p_name.innerHTML = "John Smith";
      td_name_box.appendChild(p_name);
      tr.appendChild(td_name_box);

      // ↓td要素(回答時間ボックス)を生成
      var td_time_box = document.createElement("td");
      td_time_box.setAttribute("class", "table-td answered-time-box");

      // ↓p要素(回答時間)を生成
      var p_time = document.createElement("p");
      p_time.setAttribute("class", "answered-time");
      p_time.innerHTML = "7.90";
      td_time_box.appendChild(p_time);
      tr.appendChild(td_time_box);

      tbody.appendChild(tr);
    }
  };

  const removeHide = () => {
    setIsPlaying(true);
    setTimeout(() => {
      const tr = document.getElementsByClassName("table-row");
      var index = 0;
      const end = tr.length;
      const last = end - 1;
      const timerID = setInterval(() => {
        if (index < last) {
          tr[index].classList.remove("non-visible");
        } else {
          setTimeout(() => {
            tr[last].classList.remove("non-visible");
          }, 1200);
        }
        index++;
        if (index === end) {
          clearInterval(timerID);
        }
      }, 350);
    }, 1000);
  };

  useEffect(() => {
    addRankingElements();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      rankingAudioEl.current.play();
    }
  }, [isPlaying]);

  return (
    <main id="ranking-screen">
      <Container>
        <Row id="ranking-table-bg">
          <Col>
            <Table id="ranking-table">
              <tbody id="tbody">
                <tr>
                  <td rowSpan="10" className="vertical-title-box">
                    <p id="vertical-title">
                      早押しワ<span className="turn-90">ー</span>
                      スト
                      <br />
                      <span className="text-make-smaller">10</span>
                      <Button className="btn" onClick={() => removeHide()}>
                        Go
                      </Button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <audio src="./music/ranking.mp3" ref={rankingAudioEl}></audio>
      </Container>
    </main>
  );
}

export default Ranking;
