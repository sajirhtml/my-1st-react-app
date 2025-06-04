import { Suspense } from 'react';
import './App.css'
import Count from './Count'
import Users from './Users'
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {

  const promiseFriends = fetchFriends();

  function handleClick() {
    alert('Button clicked!');
  }

  const addFive = (num)=> {
    alert(num + 5);
  }

  return (
    <>
      <h1>React</h1>

      <Suspense fallback = {<h3 className='card'>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback = {<h3 className='card'>aitase khankir polara.....</h3>}>
        <Friends promiseFriends = {promiseFriends}></Friends>
      </Suspense>

      <Count/>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=> alert("clicked 2")}>click me2</button>
      <button onClick={() => addFive(5)}>add5</button>

    </>
  )
}

export default App