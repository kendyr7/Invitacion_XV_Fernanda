import React from 'react';

const FallingPetals = () => {
  const petals = Array.from({ length: 30 });
  return (
    <div className="petals-container">
      {petals.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * -10}s`,
        };
        const petalStyle = {
          width: `${Math.random() * 15 + 10}px`,
          height: 'auto',
          animationDuration: `${Math.random() * 4 + 3}s, ${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 5}s, ${Math.random() * 5}s`,
        }
        return (
          <div key={i} className="petal" style={style}>
            <img src="/flowers_deco/flowers.png" alt="petal" style={petalStyle} />
          </div>
        );
      })}
    </div>
  );
};

export default FallingPetals;