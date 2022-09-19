import React, { useEffect } from "react";
import { accountSignOut, auth } from "../firebase auth/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <div className="home-container">
      <button onClick={accountSignOut}>Sign Out</button>
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
