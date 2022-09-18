import React, { useState, useEffect, useCallback } from "react";
import LineItem from "./LineItem";

export default function TimeSheet() {
  const [editDescription, setEditDescription] = useState(false);
  const [description, setDescription] = useState("");

  const [editRate, setEditRate] = useState(false);
  const [rate, setRate] = useState(0);

  const [time, setTime] = useState(0);
  const [cost, setCost] = useState(0);

  const [lineItem, setLineItem] = useState([]);

  const toggleInput = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === "description") {
      editDescription ? setEditDescription(false) : setEditDescription(true);
    } else if (id === "rate") {
      editRate ? setEditRate(false) : setEditRate(true);
    }
  };

  //Come back to this

  const addLineItem = useCallback(() => {
    const item = {
      date: new Date(),
      time: 0,
    };
    setLineItem((curr) => [...curr, item]);
  });

  const handleTimeChange = (e) => {
    const id = e.target.id;
    const time = e.target.value;
    if (!time) {
      lineItem[id].time = 0;
    } else {
      lineItem[id].time = time;
    }
    let total = 0;
    lineItem.forEach((item) => {
      total += parseInt(item.time);
    });
    setTime(total);
    const cost = total * rate;
    setCost(cost);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    const id = e.target.id;
    lineItem[id].date = new Date(date);
    console.log(lineItem[id].date);
  };

  const lineItems = lineItem.map((item, index) => {
    return (
      <LineItem
        key={index}
        id={index}
        date={item.date}
        time={item.time}
        handleTime={handleTimeChange}
        handleDate={handleDateChange}
      />
    );
  });

  useEffect(() => {
    if (lineItem.length === 0) {
      addLineItem();
    }
  }, [addLineItem, lineItem, lineItem.length, rate]);

  return (
    <div className="timesheet-container">
      <div>
        <div className="timesheet-title">
          <p>Timesheet</p>
        </div>
        <div className="add-line-item">
          <button onClick={addLineItem}>Add Line +</button>
          <button>Save</button>
        </div>
        <form action="">
          <div className="rate">
            <div className="edit-rate">
              <p>Rate: {rate}</p>
              <button onClick={toggleInput} className="edit-button" id="rate">
                Edit
              </button>
            </div>
            <div
              style={{
                display: editRate ? "flex" : "none",
              }}
            >
              <input
                type="number"
                onChange={(e) => {
                  setRate(e.target.value);
                }}
                defaultValue={rate}
              />
              <button onClick={toggleInput} id="rate">
                Done
              </button>
            </div>
          </div>
          <div className="line-item-header">
            <div className="date">
              <p>Date</p>
            </div>
            <div className="time">
              <p>Time (Minutes)</p>
            </div>
          </div>
          <div className="line-item-container" id="inputs">
            {lineItems}
          </div>
          <div>
            <p>Total-Time: {time}</p>
            <p>Total-Cost: {cost}</p>
          </div>
        </form>
      </div>
      <div className="description">
        <div className="description-edit">
          <p>Description</p>
          <button
            onClick={toggleInput}
            className="edit-button"
            id="description"
          >
            Edit
          </button>
        </div>
        <p
          style={{
            display: editDescription ? "none" : "block",
          }}
        >
          {description}
        </p>
        <div
          className="edit-description"
          style={{
            display: editDescription ? "flex" : "none",
          }}
        >
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            defaultValue={description}
          ></textarea>
          <button onClick={toggleInput} id="description">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
