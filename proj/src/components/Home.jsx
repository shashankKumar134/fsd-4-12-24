import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the App</h1>
      <p>Select a page to explore:</p>
      <nav>
        <Link to="/counter" style={{ margin: '0 10px' }}>Counter</Link>
        <Link to="/stopwatch" style={{ margin: '0 10px' }}>Stopwatch</Link>
      </nav>
    </div>
  );
};

export default Home;
