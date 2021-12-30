// libs
import { useState } from 'react';
import { Button } from '@tm-org/components';
import logo from './logo.svg';
import './App.css';
// components

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button onClick={() => setCount(count + 1)}> Increment </Button>
        <Button onClick={() => setCount(count - 1)}> Decrement </Button>
        Count now: {count}
      </header>
    </div>
  );
};

export default App;
