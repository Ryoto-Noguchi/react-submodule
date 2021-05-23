import React, { useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

function Countdown(props) {
  const countdownAudioEl = useRef(null);
  let { number, setNumber, correctAnswer, isPlaying, setIsPlaying } = props;
  const countdown = () => {
    let cueMonitor = document.getElementById("cue_monitor");
    cueMonitor.classList.add("hide");
    let nextBtn = document.getElementById("next_btn");
    let prevBtn = document.getElementById("prev_btn");
    let rankBtn = document.getElementById("rank_btn");
    let championBtn = document.getElementById("champion_btn");
    // ↓[Next]ボタンをカウントダウン中はdisabledにする
    nextBtn.disabled = true;
    // ↓[Prev]ボタンをカウントダウン中はdisabledにする
    prevBtn.disabled = true;
    // ↓[Rank]ボタンをカウントダウン中はdisabledにする
    rankBtn.disabled = true;
    // ↓[Champ]ボタンをカウントダウン中はdisabledにする
    championBtn.disabled = true;

    // ↓isPlayingをTRUEに切り替え、useEffectメソッドを走らせる
    setIsPlaying((isPlaying) => !isPlaying);
    setIsPlaying((isPlaying) => {
      return isPlaying;
    });

    const count = 0;
    const timerID = setInterval(function () {
      // ↓カウントダウンが0になったら
      if (number === count) {
        // ↓繰り返しを停止する
        clearInterval(timerID);
        // ↓「アンサーチェック！」の合図と同時に回答数を表示する
        setTimeout(() => {
          const answerBoxes = document.getElementsByClassName("count-box");
          for (let i = 0; i < answerBoxes.length; i++) {
            answerBoxes[i].classList.remove("hide");
          }
        }, 2400);
        const timerId = setInterval(() => {
          const characters = document.getElementsByClassName("character");
          for (let i = 0; i < characters.length; i++) {
            if (characters[i].innerHTML === correctAnswer) {
              let count = 0;
              // ↓「正解はこちら！」の合図に合わせて正解の選択肢の背景色を変える
              const timerId = setInterval(() => {
                characters[i]
                  .closest(".cell")
                  .classList.toggle("blink-bg-color");
                characters[i]
                  .closest(".cell")
                  .lastElementChild.classList.toggle("toggle-bg-color");
                count++;
                if (count > 4) {
                  // ↓正解の選択肢の背景色を点滅させる
                  clearInterval(timerId);
                  setTimeout(() => {
                    nextBtn.disabled = false;
                    prevBtn.disabled = false;
                    rankBtn.disabled = false;
                    championBtn.disabled = false;
                  }, 1000);
                }
              }, 300);
            }
          }
          clearInterval(timerId);
        }, 6000);
      } else {
        setNumber(--number);
        // ↓カウントダウンをコンソールに表示
        console.log(number);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlaying) {
      // ↓カウントダウン音源を再生する
      countdownAudioEl.current.play();
    }
  }, [isPlaying]);

  return (
    <div>
      <Button
        className="manupulate-btn"
        onClick={() => countdown()}
        disabled={number !== 10 && true}
      >
        Start
      </Button>
      <audio
        // ↓「src="../public/music/countdown_10sec.mp3"」ではエラーになる。なぜだかは不明
        src="./music/countdown.mp3"
        ref={countdownAudioEl}
      ></audio>
    </div>
  );
}

export default Countdown;
