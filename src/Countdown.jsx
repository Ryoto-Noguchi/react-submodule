import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

function Countdown(props) {
  let { number, setNumber, correctAnswer } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const countdownAudioEl = useRef(null);

  const countdown = () => {
    console.log(number);
    setIsPlaying((isPlaying) => !isPlaying);
    setIsPlaying((isPlaying) => {
      return isPlaying;
    });

    setIsPlaying(!isPlaying);
    const count = 0;
    const timerID = setInterval(function () {
      if (number === count) {
        clearInterval(timerID);
        const timerId = setInterval(() => {
          var elements = document.getElementsByClassName("character");
          for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML === correctAnswer) {
              let count = 0;
              const timerId = setInterval(() => {
                elements[i].closest('.cell').classList.toggle("blink-bg-color");
                count++
                if (count > 4) {
                  clearInterval(timerId);
                }
              }, 300);
            }
          }
          clearInterval(timerId);
        }, 6000);
      } else {
        setNumber(--number);
        console.log(number);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("played");
    if (isPlaying) {
      countdownAudioEl.current.play();
    }
  }, [isPlaying]);

  return (
    <div>
      <Button className="manupulate-btn" onClick={() => countdown()} disabled={number !== 10 && true}>
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
