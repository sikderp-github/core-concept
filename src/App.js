import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alamgir', 'Bappi', 'Shuvo']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF reader', price: '$6.99' }
  ]
  return (<div className="App" >
    <header className="App-header" >
      <h1>I am a react person.</h1>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
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
      <Person></Person>

    </header>
  </div>
  );
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
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
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
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;