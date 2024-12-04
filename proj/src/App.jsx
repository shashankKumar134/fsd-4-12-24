import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </Router>
  );
};

export default App;
