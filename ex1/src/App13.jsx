function App() {
    let count = 0;
    const sleep = ms => new Promise(r => setTimeout(r, ms));
  
    async function handleClick() {
      for (let i = 0; i < 100; i++) {
        await sleep(1000); // 等一秒
        count += 1;
        document.getElementById('count').textContent = count;
      }
    }
  
    return (
      <>
        <div id='count'>0</div>
        <button onClick={handleClick}>按我 count 就+1</button>
      </>
    );
  }
  
  export default App;