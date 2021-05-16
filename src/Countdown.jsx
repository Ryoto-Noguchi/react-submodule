import React, { useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

function Countdown(props) {
  const countdownAudioEl = useRef(null);
  let { number, setNumber, correctAnswer, isPlaying, setIsPlaying } = props;
  const countdown = () => {
    document.getElementById("next-btn").disabled = true;
    document.getElementById("prev-btn").disabled = true;
    console.log(document.getElementById("next-btn"));
    // console.log(`再生否:${isPlaying}`);
    console.log(number);
    setIsPlaying((isPlaying) => !isPlaying);
    setIsPlaying((isPlaying) => {
      return isPlaying;
    });

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
                elements[i].closest(".cell").classList.toggle("blink-bg-color");
                count++;
                if (count > 4) {
                  clearInterval(timerId);
                  setTimeout(() => {
                    document.getElementById("next-btn").disabled = false;
                    document.getElementById("prev-btn").disabled = false;
                  }, 1000);
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
