import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TimeSheet from "./components/timesheet/TimeSheet"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sheet' element={<TimeSheet />} />
      </Routes>
    </div>
  );
}

export default App;
