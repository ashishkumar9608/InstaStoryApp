
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home.js';
import StoryComponent from './components/StoryComponent.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/story/:categoryItems" element={<StoryComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
