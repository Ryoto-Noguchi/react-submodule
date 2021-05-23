import React from "react";
import { Button } from "react-bootstrap";

function PrevQuestion(props) {
  const { questionNumber, goPrevQuestion } = props;
  return (
    <div>
        <Button
          id="prev_btn"
          className="manupulate-btn"
          variant="info"
          onClick={() => goPrevQuestion()}
          disabled={questionNumber <= 1 && true}
        >
          Prev
        </Button>
    </div>
  );
}

export default PrevQuestion;
