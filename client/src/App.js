import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generator from "./Pages/Generator";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/generator" element={<Generator />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
