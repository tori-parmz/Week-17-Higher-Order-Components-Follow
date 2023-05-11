import './App.css';
import React from 'react';
import Hello from './components/Hello';
import withRedBorder from './components/withRedBorder';

function App() {
  const HelloWithRedBorder = withRedBorder(Hello);
  return (
    <HelloWithRedBorder />
  );
}

export default App;
