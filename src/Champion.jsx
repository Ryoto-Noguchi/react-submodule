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

  const reveal = () => {
    setIsPlaying(true);
    setTimeout(() => {
      const tr = document.getElementsByClassName("table-row");
      var index = 9;
      // const numberOfDisplayEls = 10; // 画面に表示する行の数
      const timerID = setInterval(() => {
        if (index > 0) {
          tr[index].classList.remove("non-visible");
          tr[index].classList.add("flip-animation");
          index--;
        } else if (index === 0) {
          setTimeout(() => {
            tr[index].classList.remove("non-visible");
            tr[index].classList.add("flip-animation");
            let count = 0;
            const lastRowTdEls = tr[index].children;
            const timerID = setInterval(() => {
              // ↓最上位列のtd要素を点滅
              for (let i = 0; i < lastRowTdEls.length; i++) {
                const td = lastRowTdEls[i];
                td.classList.toggle("blink-bg-color-2");
              }
              const span = lastRowTdEls[0].firstChild;
              span.classList.toggle("blink-bg-color-3");

              count++;
              if (count > 10) {
                clearInterval(timerID);
              }
            }, 350);
          }, 1500);
          clearInterval(timerID);
        }
      }, 350);
    }, 2500);
  };

  useEffect(() => {
    addRankingElements();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      championAudioEl.current.play();
    }
  }, [isPlaying]);

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
                        onClick={() => reveal()}
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
