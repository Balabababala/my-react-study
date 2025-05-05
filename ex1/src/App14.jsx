import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function handleClick() {
    for (let i = 0; i < 100; i++) {
      setCount((prevCount) => prevCount + 1); // 正確做法：使用函式形式
      await sleep(1000); // 必須加 await，才能真正延遲
    }
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>按我 count 就 +1</button>
    </>
  );
}

export default App;