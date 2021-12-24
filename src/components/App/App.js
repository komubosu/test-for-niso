import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path="shopping-cart" element={<div><p>123</p></div>}>
          </Route>
      </Routes>
    </div>
  );
};

export default App;
