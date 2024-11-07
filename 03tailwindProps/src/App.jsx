import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Component from './components/Component.jsx';

function App() {
  let array = [1, 2, 3, 4, 5, 6];
  let obj = {
    name: 'Harry Potter',
    address: 'NewYork',
  };
  return (
    <>
      <h1>This is tailwind css</h1>
      <Component
        username="Modern technology"
        btntext="explore more"
        array={array}
      />
      <Component username="Artificial intelligence" btntext="visit me" />
      <Component username="Science Project" btntext="further more" obj={obj} />
    </>
  );
}

export default App;
