import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ShippingInfoForm from '../ShippingInfoForm/ShippingInfoForm';
import BillingInfoForm from '../BillingInfoForm/BillingInfoForm';
import './App.css';
import PaymentForm from '../PaymentFrom/PaymentForm';
import CompletedOrder from '../CompletedOrder/CompletedOrder';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path="shopping-cart" element={<ShoppingCart />}>
            <Route path='shipping' element={<ShippingInfoForm />} />
            <Route path='billing' element={<BillingInfoForm />} />
            <Route path='payment' element={<PaymentForm />} />
            <Route path='completed' element={<CompletedOrder />} />
          </Route>
          <Route path="*" element={
            <p style={{
              textAlign: 'center',
              fontSize: '20px',
              paddingTop: '40px'
            }}>404 Page Not Exist | Click on shopping cart on the upper right corner</p>
          } />
      </Routes>
    </div>
  );
};

export default App;
