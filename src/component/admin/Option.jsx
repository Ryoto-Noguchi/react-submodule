import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function Option(props) {
  // ↓XはA,B,C,Dのどれか
  const {choices, X} = props;
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id={`tooltip-${choices[X]}`}>{choices[X]}</Tooltip>}
      >
        <td className="single-cell">{choices[X]}</td>
      </OverlayTrigger>
    </>
  );
}

export default Option;
