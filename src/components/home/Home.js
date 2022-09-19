import React, { useEffect, useState } from "react";
import { accountSignOut, auth } from "../firebase auth/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
import LineItem from "../timesheet/LineItem";
import axios from "axios";

export default function Home() {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [projects, setProjects] = useState([]);

  console.log(projects);

  const getProjects = () => {
    axios({
      url: "http://localhost:8080/api",
      method: "GET",
    }).then(async (response) => {
      const data = await response.data;
      data.forEach((item) => {
        if (item.user === user.uid) {
          setProjects([item]);
        }
      });
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      getProjects();
    }
  }, [user]);

  const timeSheets = projects.map((project, index) => {
    return <Projects key={index} id={index} />;
  });

  return (
    <div className="home-container">
      <button onClick={accountSignOut}>Sign Out</button>
      <div className="home-title">
        <p>Select a Project</p>
      </div>
      <div className="projects-container">
        {timeSheets}
        <div className="add-sheet">
          <p>Add New Sheet +</p>
        </div>
      </div>
    </div>
  );
}
