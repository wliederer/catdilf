import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/about';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
