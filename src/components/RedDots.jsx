import React, { useEffect, useState } from 'react';
import '../../css/RedDots.css';

const RedDots = ({ count = 20 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: count }, () => ({
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
    }));
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="dots-container">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{ left: dot.left, top: dot.top }}
        />
      ))}
    </div>
  );
};

export default RedDots;
