import './App.css'
import Count from './Count'

function App() {

  function handleClick() {
    alert('Button clicked!');
  }

  const addFive = (num)=> {
    alert(num + 5);
  }

  return (
    <>
      <h1>React</h1>
      <Count></Count>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=> alert("clicked 2")}>click me2</button>
      <button onClick={() => addFive(5)}>add5</button>

    </>
  )
}

export default App