import React, { useState } from 'react';
import './App.css';

//JSX: sintaxe do xml dentro do javascripst
//useState() => sempre retorna um array [valor do estado, função para atualizar o valor do estado] 

import Routes from './routes'

function App() {
  return (

    <div>

      <Routes />
    </div>       
  );
}

export default App;
