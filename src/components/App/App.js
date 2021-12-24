import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path="shopping-cart" element={<ShoppingCart />}>
          </Route>
      </Routes>
    </div>
  );
};

export default App;
