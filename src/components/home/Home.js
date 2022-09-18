import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-title">
        <p>Select a Project</p>
      </div>
      <div className="projects-container">
        <div>
          <p>Project 1</p>
          <p>View</p>
        </div>
        <div>
          <p>Project 2</p>
          <p>View</p>
        </div>
        <div>
          <p>Project 3</p>
          <p>View</p>
        </div>
        <div>
          <p>Project 4</p>
          <p>View</p>
        </div>
        <div className="add-sheet">
          <p>Add New Sheet +</p>
        </div>
      </div>
    </div>
  );
}
