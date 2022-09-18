import React from "react";

export default function TimeSheet() {
  return (
    <div className="timesheet-container">
      <div>
        <div className="timesheet-title">
          <p>Timesheet</p>
        </div>
        <form action="">
          <div className="rate">
            <p>Rate: </p>
            <input type="number" />
          </div>
          <div className="line-item-header">
            <div className="date">
              <p>Date</p>
            </div>
            <div className="time">
              <p>Time (Minutes)</p>
            </div>
          </div>
          <div className="line-item-container">
            <div className="line-item">
              <input type="date" />
              <input type="number" defaultValue={5} />
            </div>
            <div className="line-item">
              <input type="date" />
              <input type="number" />
            </div>
            <div className="line-item">
              <input type="date" />
              <input type="number" />
            </div>
            <div className="line-item">
              <input type="date" />
              <input type="number" />
            </div>
            <div className="line-item">
              <input type="date" />
              <input type="number" />
            </div>
          </div>
          <div>
            <p>Total-Time: </p>
            <p>Total-Cost: </p>
          </div>
        </form>
        <div className="add-line-item">
          <button>Add Line Item +</button>
        </div>
      </div>
      <div className="description">
        <div className="description-edit">
          <p>Description</p>
          <button>Edit</button>
        </div>
        <p></p>
      </div>
    </div>
  );
}
