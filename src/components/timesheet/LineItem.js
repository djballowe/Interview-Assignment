import React from "react";

export default function LineItem(props) {
  const date = new Date(props.date);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let newDate = `${year}-${month}-${day}`;

  return (
    <div className="line-item">
      <input
        type="date"
        id={props.id}
        onChange={props.handleDate}
        defaultValue={newDate}
      />
      <input
        type="number"
        id={props.id}
        onChange={props.handleTime}
        defaultValue={props.time}
      />
      <p>X</p>
    </div>
  );
}
