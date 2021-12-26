import { Outlet, useNavigate } from 'react-router-dom';

import './ShoppingCart.css';
import OrderInfo from '../OrderInfo/OrderInfo';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ShoppingCart() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === '/shopping-cart' || '/shopping-cart/') {
  //     navigate('/shopping-cart/shipping');
  //   };
  // }, []);

  return (
    <div className='shopping-cart'>
      <div className='shopping-cart__form'>
        {location.pathname === '/shopping-cart/completed' ?
          ''
        :
          <BreadCrumbs />
        }
        <Outlet/>
      </div>
      <div className={`shopping-cart__order-info ${location.pathname === '/shopping-cart/completed' ? 'shopping-cart__order-info_completed' : ''}`}>
        <OrderInfo />
      </div>
    </div>
  );
};

export default ShoppingCart;