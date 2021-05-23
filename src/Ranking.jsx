import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import data from "./respondentData";

function Ranking(props) {
  const { responses } = props;
  // const [responses, setResponses] = useState(data);
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

        // ↓span要素(順位)を生成
        var span_rank = document.createElement("sapn");
        span_rank.setAttribute("class", "rank-number");

        // ↓画面に表示する順位を設定
        const numberOfDisplayItems = 10
        const total = responses.length;
        console.log(`変数total: ${total}`)
        const screenTop = total - numberOfDisplayItems;
        console.log(`変数screenTop: ${screenTop}`)
        const n = i + screenTop;
        span_rank.innerHTML = responses[n].id;

      // ↓生成したspan要素(順位)をtd要素(回答者名ボックス)にappend
      td_name_box.appendChild(span_rank);

        // ↓p要素(回答者名)を生成
        var p_name = document.createElement("p");
        p_name.setAttribute("class", "name-in-table");
        p_name.innerHTML = responses[n].fullName;
        td_name_box.appendChild(p_name);

      // ↓中身を作成したtd要素(回答者名ボックス)をtrに追加
      tr.appendChild(td_name_box);

      // ↓td要素(回答時間ボックス)を生成
      var td_time_box = document.createElement("td");
      td_time_box.setAttribute("class", "table-td answered-time-box");

      // ↓p要素(回答時間)を生成
      var p_time = document.createElement("p");
      p_time.setAttribute("class", "answered-time");
      p_time.innerHTML = responses[n].time
        .replaceAll(":", "")
        .replace(/^0+/, ""); // HH:mmの0を消去
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
      console.log(`作成したtr要素数: ${end}`);
      // ↓全件数から１引いて最後の行にDelayを作る
      const lastOne = 1;
      const last = end - lastOne;
      const timerID = setInterval(() => {
        if (index < last) {
          tr[index].classList.remove("non-visible");
          tr[index].classList.add("flip-animation");
        } else {
          setTimeout(() => {
            tr[last].classList.remove("non-visible");
            tr[last].classList.add("flip-animation");
            let count = 0;
            const lastRowTdEls = tr[last].children;
            const timerID = setInterval(() => {
              // ↓最終列のtd要素を点滅
              for (let i = 0; i < lastRowTdEls.length; i++) {
                const td = lastRowTdEls[i];
                td.classList.toggle("blink-bg-color-2");
              }
              const span = lastRowTdEls[0].firstChild;
              span.classList.toggle("blink-bg-color-3");

              count ++;
              if (count > 6) {
                clearInterval(timerID)
              }
            }, 350);
          }, 1000);
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
