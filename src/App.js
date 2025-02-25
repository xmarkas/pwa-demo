import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.scss';


// import Home from './pages/Home';
// import About from './pages/About';
const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const FindLocation = lazy(() => import('./pages/FindLocation'));
const NavBar = lazy(() => import('./components/NavBar'));
const FootBar = lazy(() => import('./components/FootBar'));
const Snacks = lazy(() => import('./components/Snacks'));
const Desktop = lazy(() => import('./pages/Desktop'));


function App() {
  const [snackMessage, setSnackMessage] = useState("");

  const mobileOnly = window.outerWidth < 500;

  const fireSnack = sMessage => {
    const TEMPSNACK = "App links coming soon!";
    setSnackMessage(TEMPSNACK);
  }

  const endSnack = () => {
    setSnackMessage(null);
  }


  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {mobileOnly && <NavBar />}
        <Routes>
          <Route exact path="/locations" element={<FindLocation />} />
          <Route exact path="/menu" element={<About />} />
          <Route exact path="/" element={mobileOnly ? <Home fireSnack={fireSnack} />: <Desktop/>} />
        </Routes>
        {mobileOnly && <FootBar fireSnack={fireSnack} />}
        <Snacks fire={snackMessage} endSnack={endSnack} />
      </Suspense>
    </Router>
  );
}

export default App;
