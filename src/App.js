import Home from './pages/Home';
import './tailwind.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Project from './pages/Project';
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
    );

}

export default App;
