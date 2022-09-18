import React from "react";

export default function LineItem(props) {
  return (
    <div className="line-item">
      <input type="date" id={props.id} onChange={props.handleDate} />
      <input type="number" id={props.id} onChange={props.handleTime} />
      <p>X</p>
    </div>
  );
}
