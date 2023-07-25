import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold">Counter</h2>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
