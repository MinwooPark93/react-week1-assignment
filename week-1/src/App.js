import "./App.css";
import Main from "./Main";
import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/Detail/:week_day" element={<Detail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
