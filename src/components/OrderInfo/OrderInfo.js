import { useSelector } from 'react-redux';

import './OrderInfo.css';
import OrderList from '../OrderList/OrderList';

function OrderInfo() {
  const orders = useSelector(state => state.order.orders);
  const shipping = useSelector(state => state.order.shipping);
  const taxes = useSelector(state => state.order.taxes);

  const orderSubtotal = orders.reduce((acc, item) => acc + item.price*item.quantity, 0);
  const orderTotal = orderSubtotal + shipping + taxes;

  return (
    <div className='order-info'>
      <div className='order-info__field'>
        <p className='order-info__title'>Order Summary</p>
        <button className='order-info__button'>edit order</button>
      </div>
      <OrderList />
      <ul className='order-info__prices'>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Subtotal</p>
          <p className='order-info__price-text'>{`${orderSubtotal ? `$${orderSubtotal}` : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Shipping</p>
          <p className='order-info__price-text'>{`${shipping ? `$${shipping}` : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text'>Taxes</p>
          <p className='order-info__price-text'>{`${taxes ? `$${taxes}` : 'Free'}`}</p>
        </li>
        <li className='order-info__price'>
          <p className='order-info__price-text order-info__price-text_total'>Total</p>
          <p className='order-info__price-text order-info__price-text_total'>{`${orderTotal ? `$${orderTotal}` : 'Free'}`}</p>
        </li>
      </ul>
      <p className='order-info__terms'>
        All purchases are subject to our <a href='#'>Terms and Conditions.</a>
      </p>
    </div>
  );
};

export default OrderInfo;