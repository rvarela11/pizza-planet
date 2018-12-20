// @vendors
import React from 'react';

// @components
import Header from '../Header/Header';
import Pizzas from '../Pizzas/Pizzas';

// @styles
import './App.scss';

const App = () => (
  <div className = "App" > 
    <Header /> 
    <Pizzas />
  </div>
);

export default App;
