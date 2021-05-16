import React from "react";
import { Button } from "react-bootstrap";

function NextQuestion(props) {
  const { questionNumber, questions, goNextQuestion } = props;
  return (
    <div>
        <Button
          id="next-btn"
          className="manupulate-btn"
          variant="warning"
          onClick={() => goNextQuestion()}
          disabled={questionNumber > questions.length - 1 && true}
        >
          Next
        </Button>
    </div>
  );
}

export default NextQuestion;
