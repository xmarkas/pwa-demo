import React, {lazy, Suspense} from 'react';
import { BrowserRoute as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about"><About /></Route>
        <Route path="/"><Home /></Route>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
