import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects(props) {
  let navigate = useNavigate();
  return (
    <div>
      <p>Project {props.index}</p>
      <p
        id={props.id}
        onClick={(e) => {
          navigate(`/sheets/${e.target.id}`);
        }}
      >
        View
      </p>
    </div>
  );
}
