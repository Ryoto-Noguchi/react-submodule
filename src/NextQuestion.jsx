import React from 'react'
import { Button } from "react-bootstrap";

function NextQuestion(props) {
  const { questionNumber, questions, goNextQuestion } = props;
  return (
    <div>
      {questionNumber < questions.length && (
        <Button
          className="manupulate-btn"
          variant="warning"
          onClick={() => goNextQuestion()}
        >
          Next
        </Button>
      )}
    </div>
  );
}

export default NextQuestion
