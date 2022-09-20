import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TimeSheet from "./components/timesheet/TimeSheet";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/sheets/:id" element={<TimeSheet />} />
      </Routes>
    </div>
  );
}

export default App;
