import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

function Ranking() {
  const [isPlaying, setIsPlaying] = useState(false);
  const rankingAudioEl = useRef(null);
  const displayRanking = () => {
    var tbody = document.getElementById("tbody");

    let count = document.getElementsByClassName("table-row");
    setTimeout(() => {
      const timerID = setInterval(() => {
        if (count.length + 1 >= 10) {
          clearInterval(timerID);
        }
        addRankingElements();
      }, 350);
    }, 1000);

    // ↓table要素のIDを取得(この中で処理を実行)
    const addRankingElements = () => {
      console.log("呼び出し");
      // ↓tr要素を生成
      var tr = document.createElement("tr");
      tr.setAttribute("class", "table-row");

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
    };
  };

  const handleClick = () => {
    setIsPlaying(true);
    displayRanking();
  };

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
                      <Button className="btn" onClick={() => handleClick()}>
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
