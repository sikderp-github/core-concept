import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])

  // const nayoks = [{ name: 'Anwar', age: 45 }, { name: 'Jafor', age: 48 }, { name: 'Bappi', age: 40 }]
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
  ]
  const nayok1 = ['Razzak', 'Alamgir', 'Jashim']
  return (<div className="App" >
    <header className="App-header" >
      <h1>I am a react person.</h1>
      <MovieCounter></MovieCounter>
      {
        nayoks.map(x => <Nayok name={x.name} key={x.id} age={x.age}></Nayok>)
      }
      <Counter></Counter>
      <Nayok name={nayok1[0]} age={'74'}></Nayok>
      <Nayok name={nayok1[1]} age={'64'}></Nayok>
      <Nayok name={nayok1[2]} age={''}></Nayok>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok.name}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      <Person name='Munna' job="football"></Person>
      <Person name='Masum' job='Dorshak'></Person>

    </header>
  </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h3>Number of movies: {count} </h3>
      <MovieDisplay name={count + 5}></MovieDisplay>
      <MovieDisplay name={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return (
    <h4>Movies I acted: {props.name}</h4>
  )
}
function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '10px'
  }
  return (<div style={nayokStyle}>
    <h1>{props.name}</h1>
    <h3>I acted in  5 movies in {props.age || 40} years.</h3>
  </div>

  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseOut={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '2px solid gold', width: '400px' }}>
      <h3>My Name : {props.name} </h3>
      <p>My Profession : {props.job} </p>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;