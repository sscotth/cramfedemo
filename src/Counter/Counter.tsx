import React from 'react';

export const Counter: React.VFC = () => {
  const [count, setCount] = React.useState(0);

  const addToCount = () => setCount(count + 1);

  return (
    <div>
      <h5>Counter</h5>
      <p>Count: {count}</p>
      <button onClick={addToCount}>Add to Count</button>
    </div>
  );
};
