import React from 'react'
import { Button } from "react-bootstrap";

function PrevQuestion(props) {
  const {questionNumber, goPrevQuestion} = props;
  return (
    <div>
      {questionNumber > 1 && (
        <Button
          className="manupulate-btn"
          variant="info"
          onClick={() => goPrevQuestion()}
        >
          Prev
        </Button>
      )}
    </div>
  );
}

export default PrevQuestion
